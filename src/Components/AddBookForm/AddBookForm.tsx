import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 50vh;
  background-color: #f5f5f5;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const LabelForm = styled.label`
  color: #707070;
  width: 30%;
`;

const AddBooksForm = () => {
  return (
    <>
      <Form>
        <Input smaller labelText={"Tytuł"} />
        <Input smaller labelText={"Autor"} />
        <Input smaller labelText={"Gatunek"} />
      </Form>
    </>
  );
};

export default AddBooksForm;
