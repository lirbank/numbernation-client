import React, { useState } from "react";
import { useCombobox } from "downshift";
import styled from "styled-components";
import { BaseInput } from "./input";

const Combo = styled.div`
  position: relative;
  width: 100%;
  /* width: 200px; */
  background-color: #ddd;
`;

const Ul = styled.ul`
  position: absolute;
  overflow-y: auto;
  max-height: 180px;
  margin: 0;
  z-index: 1000;
  list-style: none;
  padding: 0;
  background: white;

  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
`;

const Li = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#bde4ff" : "transparent")};
`;

const Input = styled(BaseInput)`
  height: 35px;
  border-bottom: 1px solid black;
  width: 100%;
`;

export function DropdownCombobox(props: { items: string[] }) {
  const [inputItems, setInputItems] = useState(props.items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        props.items.filter((item) => {
          return typeof inputValue === "string"
            ? item.toLowerCase().includes(inputValue.toLowerCase())
            : false;
        })
      );
    },
    onSelectedItemChange: (a) => {
      console.log("SELECTED", a);
    },
  });

  return (
    <Combo>
      <Input {...getInputProps()} />
      {isOpen && (
        <Ul {...getMenuProps()}>
          {inputItems.map((item, index) => (
            <Li
              key={`${item}${index}`}
              selected={highlightedIndex === index}
              {...getItemProps({ item, index })}
            >
              {item}
            </Li>
          ))}
        </Ul>
      )}
    </Combo>
  );
}
