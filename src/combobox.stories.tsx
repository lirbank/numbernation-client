import React from "react";
import { DropdownCombobox } from "./combobox";

export default {
  title: "DropdownCombobox",
};

const accounts = [
  { id: "a", type: "Expenses", name: "6040 Travel" },
  { id: "b", type: "Expenses", name: "6050 Promotional meals 50%" },
  { id: "c", type: "Expenses", name: "6060 Entertainment Meals 100%" },
  { id: "d", type: "Expenses", name: "6200 Advertising" },
  { id: "e", type: "Expenses", name: "6250 Conferens and Training" },
  { id: "f", type: "Expenses", name: "6500 Payroll Employer Tax" },
  { id: "g", type: "Expenses", name: "6520 Payroll - Temp Exp" },
];

export const Default = () => <DropdownCombobox />;
