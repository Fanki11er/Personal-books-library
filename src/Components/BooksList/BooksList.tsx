import React from "react";
import styled from "styled-components";

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
  return (
    <>
      <ListsWrapper>
        <Heading>Wszystkie</Heading>

        <Loading>
          <LoadingImage src={"../../assets/svg/Ellipse.svg"} /> Loading
        </Loading>

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
