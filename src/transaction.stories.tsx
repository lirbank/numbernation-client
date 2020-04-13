import React from "react";
import styled from "styled-components";
import { TransactionInput } from "./transaction";

export default {
  title: "TransactionInput",
};

const Wrapper = styled.div`
  background-color: blue;
`;

const accounts = [
  { id: "a", type: "Expenses", name: "Travel" },
  { id: "b", type: "Expenses", name: "Promotional meals 50%" },
  { id: "c", type: "Expenses", name: "Entertainment meals 100%" },
  { id: "d", type: "Expenses", name: "Advertising" },
  { id: "e", type: "Expenses", name: "Conferences and training" },
  { id: "f", type: "Expenses", name: "Payroll - Employer tax" },
  { id: "g", type: "Expenses", name: "Payroll - Temp exp" },
];

export const Default = () => (
  <Wrapper>
    <TransactionInput accounts={accounts} />
  </Wrapper>
);
