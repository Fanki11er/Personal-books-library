import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.formLighterGray};
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
  border: 2px solid ${({ theme }) => theme.listBlue};
  margin: 0 15px;
  box-shadow: 2px 3px 6px ${({ theme }) => theme.listBlue};
`;

const ColorSwitch = styled.button`
  border-radius: 30px;
  width: 8%;
  height: 4vh;
  border: 2px solid ${({ theme }) => theme.listBlue};
  box-shadow: 2px 3px 6px ${({ theme }) => theme.listBlue};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.listBlue};
  border-radius: 30px;
  box-shadow: 2px 3px 6px ${({ theme }) => theme.listBlue};
  width: 200px;
  height: 40px;
  margin: 40px;
  color: ${({ theme }) => theme.listBlue};
  font-weight: bold;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  font-size: 18px;
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
