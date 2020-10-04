import React from "react";
import styled from "styled-components";
import { useQuery, gql, QueryResult } from "@apollo/client";
import { BooksData } from "../../types/types";

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: ${({ theme }) => theme.listBlue};
  text-align: center;
  align-items: center;
  height: 100vh;
`;

const ButtonList = styled.button`
  background-color: ${({ theme }) => theme.buttonListBlue};
  border-radius: 30px;
  box-shadow: 2px 3px 6px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: ${({ theme }) => theme.formLighterGray};
  font-style: italic;
  border: none;
`;

const Lists = styled.ul`
  overflow-y: scroll;
  padding: 20px 0;
`;

const InsideLists = styled.ul`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const MiddleList = styled.li`
  color: ${({ theme }) => theme.formLighterGray};
  background-color: ${({ theme }) => theme.inputLightGray};
  color: ${({ theme }) => theme.buttonLightGray};
  font-size: 20px;
  list-style: none;
  text-align: center;
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.listBlue};
  border-radius: 30px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.buttonorange};
  box-shadow: 2px 4px 6px ${({ theme }) => theme.formLighterGray};
`;
const LoadingImage = styled.img`
  transform: rotateX("90deg");
`;

const Loading = styled.div`
  font-size: 20px;
  background-color: ${({ theme }) => theme.inputLightGray};
  border-radius: 30px;
  text-align: center;
  font-size: 20px;
  margin: 20px;
  width: 600px;
  height: 20vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.li`
  color: ${({ theme }) => theme.formLighterGray};
  border-radius: 30px;
  margin: 20px;
  width: 600px;
  height: 20vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.inputLightGray};
  color: ${({ theme }) => theme.buttonLightGray};
  font-size: 20px;
  list-style: none;
  box-shadow: 2px 4px 6px ${({ theme }) => theme.buttonLightGray};
`;

const BooksList = () => {
  const booksList = gql`
    query {
      books {
        author
        title
        read
      }
    }
  `;
  const { loading, error, data } = useQuery(booksList) as QueryResult<
    BooksData
  >;
  data && renderBooksList(data);

  return (
    <>
      <ListsWrapper>
        <Heading>Wszystkie</Heading>

        <Loading>
          <LoadingImage src={"../../assets/svg/Ellipse.svg"} /> Loading
        </Loading>

        <Lists>
          {loading ? <p>Loading</p> : undefined}
          {data ? renderBooksList(data) : undefined}
          {error ? <p>Error</p> : undefined}
        </Lists>
      </ListsWrapper>
    </>
  );
};

export default BooksList;

const renderBooksList = (data: BooksData) => {
  const { books } = data;

  return books.map(({ author, title, read }) => {
    return (
      <>
        <List>
          <InsideLists>
            <MiddleList>{title} </MiddleList>
            <MiddleList>{author}</MiddleList>
            <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
            <MiddleList>{read ? "Przeczytane" : "Nie przeczytane"}</MiddleList>
          </InsideLists>
        </List>
        <ButtonList>Przeczytane</ButtonList>
      </>
    );
  });
};
