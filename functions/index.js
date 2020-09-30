const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const serviceAccount = require("./Key/firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-books-library.firebaseio.com",
});

typeDefs = gql`
  type Book {
    id: ID!
    author: String!
    title: String!
    read: Boolean!
  }

  type Query {
    books: [Book]
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
