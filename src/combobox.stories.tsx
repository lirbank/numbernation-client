import React from "react";
import styled from "styled-components";
import { DropdownCombobox } from "./combobox";

export default {
  title: "DropdownCombobox",
};

// const accounts = [
//   { id: "a", type: "Expenses", name: "6040 Travel" },
//   { id: "b", type: "Expenses", name: "6050 Promotional meals 50%" },
//   { id: "c", type: "Expenses", name: "6060 Entertainment Meals 100%" },
//   { id: "d", type: "Expenses", name: "6200 Advertising" },
//   { id: "e", type: "Expenses", name: "6250 Conferens and Training" },
//   { id: "f", type: "Expenses", name: "6500 Payroll Employer Tax" },
//   { id: "g", type: "Expenses", name: "6520 Payroll - Temp Exp" },
// ];

const Combo = styled.div`
  width: 200px;
`;

export const Default = () => (
  <>
    <DropdownCombobox
      items={[
        "Neptunium",
        "Plutonium",
        "Americium",
        "Curium",
        "Berkelium",
        "Californium",
        "Einsteinium",
        "Fermium",
        "Mendelevium",
        "Nobelium",
        "Lawrencium",
        "Rutherfordium",
        "Dubnium",
        "Seaborgium",
        "Bohrium",
        "Hassium",
        "Meitnerium",
        "Darmstadtium",
        "Roentgenium",
        "Copernicium",
        "Nihonium",
        "Flerovium",
        "Moscovium",
        "Livermorium",
        "Tennessine",
        "Oganesson",
      ]}
    />
    <DropdownCombobox
      items={[
        "6040 Travel",
        "6050 Promotional meals 50%",
        "6060 Entertainment Meals 100%",
        "6200 Advertising",
        "6250 Conferens and Training",
        "6500 Payroll Employer Tax",
        "6520 Payroll - Temp Exp",
        "6530 Health Insurance Premiums",
        "6550 Compensation of officers",
        "7060 Online services and Subscriptions",
        "7100 Taxes & Licenses",
        "7180 CA Secretary of State Fee",
        "7190 CA Franchise Taxboard",
        "7300 Legal & Professional Fees",
        "7700 Office Expenses",
        "7760 Telephone and Internet",
        "7800 Insurance",
      ]}
    />
  </>
);
