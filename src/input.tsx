import React from "react";
import styled from "styled-components";
// import { items } from "./combobox";

export const BaseInput = styled.input`
  appearance: none;
  outline: none;
  border: none;
  display: block;
  /* height: 35px; */
  /* border-bottom: 1px solid black; */
  box-sizing: border-box;
  /* width: 50%; */
  background-color: transparent;
  /* background-color: green; */
  border-radius: 0;
`;

export const Input = styled.input`
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

export const Option = styled.option`
  /* outline: 0;
  border: none;
  display: block;
  height: 35px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  width: 50%;
  background-color: transparent;
  background-color: green; */
  background-color: orange;
`;

export function XXX() {
  return (
    <Select>
      {/* {items.map((item) => (
        <Option>{item}</Option>
      ))} */}
    </Select>
  );
}
