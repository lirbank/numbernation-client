import React from "react";
import styled from "styled-components";
import { Input, Select, Option, XXX } from "./input";

const X = styled.div`
  background-color: red;
`;

interface Props {
  accounts: {
    id: string;
    name: string;
  }[];
}

export function TransactionInput(props: Props) {
  return (
    <X>
      <XXX />
      <Input value="Binders" />
      <Input value="12" />
    </X>
  );
}
