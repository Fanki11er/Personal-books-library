import React from "react";
import styled from "styled-components";

interface Wrapper {
  smaller?: boolean | undefined;
}
const InputWrapper = styled.div`
  display: flex;
  width: ${(props: Wrapper) => (props.smaller ? "400px" : "500px")};
  height: 55px;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

const CheckboxInput = styled.input`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 150px;
`;

interface Props {
  labelText: string;
  smaller?: boolean;
  type?: string;
}

const Input = (props: Props) => {
  const { labelText, smaller, type } = props;
  return (
    <InputWrapper smaller={smaller}>
      <Label>{labelText}:</Label>
      {type !== "checkbox" ? (
        <FormInput />
      ) : (
        <CheckboxInput type={"checkbox"} />
      )}
    </InputWrapper>
  );
};

export default Input;
