import styled from "styled-components";

export const BaseInput = styled.input`
  appearance: none;
  outline: none;
  border: none;
  display: block;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 0;
`;

export const Input = styled(BaseInput)`
  height: 35px;
  border-bottom: 1px solid black;
  width: 50%;
  background-color: green;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  border: none;
  display: block;
  height: 35px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  width: 50%;
  background-color: transparent;
  background-color: green;
  border-radius: 0;
`;

export const Option = styled.option``;
