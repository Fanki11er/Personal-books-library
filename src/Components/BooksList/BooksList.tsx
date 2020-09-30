import React from "react";
import styled from "styled-components";

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #e535ab;
  text-align: center;
  align-items: center;
`;

const ButtonList = styled.button`
  background-color: #4b4b4b;
  border-radius: 30px;
  box-shadow: 2px 3px 6px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: #f5f5f5;
  font-style: italic;
  border: none;
`;

const Lists = styled.ul`
  overflow-y: scroll;
  max-height: 500px;
`;

const InsideLists = styled.ul`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const MiddleList = styled.li`
  color: #f5f5f5;
  background-color: #f5f5f5;
  color: #4b4b4b;
  font-size: 20px;
  list-style: none;
  text-align: center;
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #f5f5f5;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  box-shadow: 2px 4px 6px #4b4b4b;
`;

const List = styled.li`
  color: #f5f5f5;
  border-radius: 30px;
  margin: 20px;
  width: 600px;
  height: 20vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #4b4b4b;
  font-size: 20px;
  list-style: none;
  box-shadow: 2px 4px 6px #4b4b4b;
`;

const BooksList = () => {
  return (
    <>
      <ListsWrapper>
        <Heading>Wszystkie</Heading>
        <Lists>
          <List>
            <InsideLists>
              <MiddleList>Nowa psychologia sukcesu </MiddleList>
              <MiddleList>Autor: Carol Dweck</MiddleList>
              <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
              <MiddleList>Przeczytana:</MiddleList>
            </InsideLists>
          </List>
          <ButtonList>Przeczytane</ButtonList>
          <List>
            <InsideLists>
              <MiddleList>Nowa psychologia sukcesu </MiddleList>
              <MiddleList>Autor: Carol Dweck</MiddleList>
              <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
              <MiddleList>Przeczytana:</MiddleList>
            </InsideLists>
          </List>
          <ButtonList>Przeczytane</ButtonList>
          <List>
            <InsideLists>
              <MiddleList>Nowa psychologia sukcesu </MiddleList>
              <MiddleList>Autor: Carol Dweck</MiddleList>
              <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
              <MiddleList>Przeczytana:</MiddleList>
            </InsideLists>
          </List>
          <ButtonList>Przeczytane</ButtonList>
          <List>
            <InsideLists>
              <MiddleList>Nowa psychologia sukcesu </MiddleList>
              <MiddleList>Autor: Carol Dweck</MiddleList>
              <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
              <MiddleList>Przeczytana:</MiddleList>
            </InsideLists>
          </List>
          <ButtonList>Przeczytane</ButtonList>
          <List>
            <InsideLists>
              <MiddleList>Nowa psychologia sukcesu </MiddleList>
              <MiddleList>Autor: Carol Dweck</MiddleList>
              <MiddleList>Gatunek: Psychologia Czytana</MiddleList>
              <MiddleList>Przeczytana:</MiddleList>
            </InsideLists>
          </List>
          <ButtonList>Przeczytane</ButtonList>
        </Lists>
      </ListsWrapper>
    </>
  );
};

export default BooksList;
