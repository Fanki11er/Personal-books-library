import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import { Formik, Form, Field, FieldProps, FormikErrors } from "formik";
import { useQuery, gql, QueryResult, useMutation } from "@apollo/client";
import { Book, BookData } from "../../types/types";

const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.formLighterGray};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const LabelForm = styled.label`
  color: ${({ theme }) => theme.inputLightGray};
  width: 30%;
`;
=======
interface MyFormValues {
  author: string;
  title: string;
  genre: string;
  read: boolean;
}
>>>>>>> e5cff67... Builder form using Formik

const Button = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  margin: 20px;
  background-color: ${({ theme }) => theme.buttonorange};
  border: 2px solid ${({ theme }) => theme.listBlue};
  box-shadow: 2px 3px 6px ${({ theme }) => theme.listBlue};
  font-size: 18px;
`;

const AddBooksForm = () => {
  //const [book, setNewBook] = useState<Book | undefined>(undefined);

  const newBook = gql`
    mutation addBook(
      $author: String!
      $title: String!
      $genre: String!
      $read: Boolean!
    ) {
      addNewBook(author: $author, title: $title, genre: $genre, read: $read) {
        author
        title
        id
      }
    }
  `;

  const [addNewBook, { data }] = useMutation(newBook);

  const initialValues: MyFormValues = {
    author: "",
    title: "",
    genre: "",
    read: false,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const { author, title, genre, read } = values;
        const book = {
          author,
          title,
          genre,
          read,
        };

        addNewBook({ variables: book });
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Field name="title">
            {(data: FieldProps & FormikErrors<any>) => {
              const { field, meta, errors } = data;
              return (
                <Input
                  smaller
                  labelText={"Tytuł"}
                  id={"title"}
                  type={"text"}
                  field={field}
                  placeholder="Tytuł"
                />
              );
            }}
          </Field>
          <Field name="author">
            {(data: FieldProps & FormikErrors<any>) => {
              const { field, meta, errors } = data;
              return (
                <Input
                  smaller
                  labelText={"Autor"}
                  id={"author"}
                  type={"text"}
                  field={field}
                  placeholder="Autor"
                />
              );
            }}
          </Field>
          <Field name="genre">
            {(data: FieldProps & FormikErrors<any>) => {
              const { field, meta, errors } = data;
              return (
                <Input
                  smaller
                  labelText={"Gatunek"}
                  id={"genre"}
                  type={"text"}
                  field={field}
                  placeholder="Gatunek"
                />
              );
            }}
          </Field>
          <Field name="read">
            {(data: FieldProps & FormikErrors<any>) => {
              const { field, meta, errors } = data;
              return (
                <Input
                  smaller
                  labelText={"Przeczytana?"}
                  id={"read"}
                  type={"checkbox"}
                  field={field}
                />
              );
            }}
          </Field>
          <button type={"submit"} disabled={isSubmitting}>
            Send
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddBooksForm;
