const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const serviceAccount = require("./Key/firebaseKey.json");
const { ref } = require("firebase-functions/lib/providers/database");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-books-library.firebaseio.com",
});

typeDefs = gql`
  type Book {
    id: ID!
    author: String!
    genre: String!
    title: String!
    read: Boolean!
    addedDate: String!
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addNewBook(
      author: String!
      title: String
      genre: String!
      read: Boolean!
    ): Book!
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return admin
        .database()
        .ref("books")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]));
    },

    book: (parent, args) => {
      const { title } = args;
      return admin
        .database()
        .ref("books")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => {
          return Object.values(val).find((value) => {
            return value.title == title;
          });
        });
    },
  },

  Mutation: {
    addNewBook: async (parent, args) => {
      const { author, title, genre, read } = args;
      const booksRef = admin.database().ref().child("books");
      const key = (await booksRef.push()).key;
      const data = new Date();
      const addedDate = data.toLocaleDateString();
      const book = { author, title, genre, read, id: key, addedDate };
      const updates = {};
      updates[`${key}`] = book;
      return await booksRef
        .update(updates)
        .then(() => book)
        .catch((err) => {
          console.log(err);
        });
    },
  },
};

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/", cors: true });

exports.graphql = functions.https.onRequest(app);

/*export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });*/
