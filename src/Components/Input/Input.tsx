import React from "react";
import styled from "styled-components";

interface Wrapper {
  smaller?: boolean | undefined;
}
const InputWrapper = styled.div`
  display: flex;
  width: ${(props: Wrapper) => (props.smaller ? "400px" : "500px")};
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.listBlue};
  width: 30%;
`;

const FormInput = styled.input`
  width: 70%;
  height: 4vh;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.listBlue};
  font-size: 18px;
  text-align: center;
  background-color: ${({ theme }) => theme.inputLightGray};
  margin: 20px;
`;

interface Props {
  labelText: string;
  smaller?: boolean;
}

const Input = (props: Props) => {
  const { labelText, smaller } = props;
  return (
    <InputWrapper smaller={smaller}>
      <Label>{labelText}:</Label>
      <FormInput />
    </InputWrapper>
  );
};

export default Input;
