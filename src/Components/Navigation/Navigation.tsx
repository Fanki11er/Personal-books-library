import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
  flex-direction: column;
`;

const SwitchesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 30px 0 0 0;
  padding-right: 30px;
`;

const LangSwitch = styled.button`
  display: flex;
  font-size: 18px;
  width: 8%;
  height: 4vh;
  border-radius: 30px;
  border: 2px solid #e535ab;
  margin: 0 15px;
  box-shadow: 2px 3px 6px #4b4b4b; /*#e535ab;*/
`;

const ColorSwitch = styled.button`
  border-radius: 30px;
  width: 8%;
  height: 4vh;
  border: 2px solid #e535ab;
  box-shadow: 2px 3px 6px #4b4b4b; /*#e535ab*/ ;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
`;

const Button = styled.button`
  border: 2px solid #e535ab;
  border-radius: 30px;
  box-shadow: 2px 3px 6px #e535ab;
  width: 200px;
  height: 40px;
  margin: 40px;
  color: #707070;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
`;

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <SwitchesWrapper>
          <LangSwitch></LangSwitch>
          <ColorSwitch></ColorSwitch>
        </SwitchesWrapper>

        <ButtonsWrapper>
          <Button>Wszystkie</Button>
          <Button>Nieprzeczytane</Button>
          <Button>Przeczytane</Button>
          <Button>Czytane</Button>
        </ButtonsWrapper>
        <SearchWrapper>
          <Input labelText={"Wyszukaj książki"} />
        </SearchWrapper>
      </Wrapper>
    </>
  );
};

export default Navigation;
