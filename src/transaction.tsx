import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./input";
import { DropdownCombobox } from "./combobox";

const Container = styled.div`
  display: flex;
`;

function Row(props: {
  accounts: string[];
  description: string;
  amount: string;
  onChange: (arg: {
    account: string;
    description: string;
    amount: string;
  }) => void;
}) {
  return (
    <Container>
      <DropdownCombobox items={props.accounts} />
      <Input
        value={props.description}
        onChange={(event) => {
          props.onChange({
            account: "a",
            amount: props.amount,
            description: event.target.value,
          });
        }}
      />
      <Input
        value={props.amount}
        onChange={(event) => {
          props.onChange({
            account: "b",
            amount: event.target.value,
            description: props.description,
          });
        }}
      />
    </Container>
  );
}

interface Props {
  accounts: {
    id: string;
    name: string;
  }[];
}

export function TransactionInput(props: Props) {
  const [lines, setLines] = useState<{ description: string; amount: string }[]>(
    [
      { description: "A", amount: "100.00" },
      { description: "B", amount: "-49.00" },
      { description: "C", amount: "-51.00" },
    ]
  );

  const accounts = props.accounts.map((account) => account.name);

  return (
    <>
      {lines.map((line, i) => (
        <Row
          key={`row-${i}`}
          accounts={accounts}
          description={line.description}
          amount={line.amount}
          onChange={(data) => {
            setLines(lines.map((e, j) => (i === j ? { ...e, ...data } : e)));
          }}
        />
      ))}
    </>
  );
}
