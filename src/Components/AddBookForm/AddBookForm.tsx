import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const Form = styled.form`
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
  return (
    <>
      <Form>
        <Input smaller labelText={"Tytuł"} />
        <Input smaller labelText={"Autor"} />
        <Input smaller labelText={"Gatunek"} />
        <Input smaller labelText={"Przeczytane?"} type="checkbox" />
        <Button>Add new book</Button>
      </Form>
    </>
  );
};

export default AddBooksForm;
