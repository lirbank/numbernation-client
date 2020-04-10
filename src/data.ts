interface Record {
  //title: string;
  accountId: string;
  amount: number;
}

interface Transaction {
  title: string;
  description: string;
  records: Record[];
}

interface Account {
  type: string;
  name: string;
  description?: string;
}

export const accounts: Account[] = [
  // Y
  { type: "expense", name: "Subscriptions and Software" },
  { type: "expense", name: "Events and training" },
  { type: "expense", name: "Equipment" },
  { type: "expense", name: "Professional Services" },
  { type: "expense", name: "Taxes and Governmental Fees" },
  { type: "expense", name: "Unsecured Loans" },
  { type: "expense", name: "Car Loan/Lease" },
  { type: "expense", name: "Student Loan" },
  { type: "expense", name: "Pets" },
  { type: "expense", name: "Rent & Bohus-Malmön" },
  { type: "expense", name: "Groceries" },
  { type: "expense", name: "Transportation" },
  { type: "expense", name: "Child Care" },
  { type: "expense", name: "Home Improvement" },
  { type: "expense", name: "Insurance Home & Car & Life" },
  { type: "expense", name: "Health" },
  { type: "expense", name: "Clothing, Hairdresser" },
  { type: "expense", name: "Interest & Fees" },
  { type: "expense", name: "ATM & Other" },
  { type: "expense", name: "Donations" },
  { type: "expense", name: "Dining Out" },
  { type: "expense", name: "Recreation" },
  { type: "expense", name: "Travel, Hotel, Rental car, Lift pass, Ski rental" },
  { type: "expense", name: "Gifts" },
  { type: "expense", name: "Gear (major purchases)" },
  { type: "expense", name: "Stationery and Books" },
  { type: "expense", name: "Tickets and Entrance fees" },
  { type: "expense", name: "Kids activities and Toys" },
  { type: "expense", name: "Subscriptions and Apps" },

  // X
  { type: "Bank", name: "Chase Ink 4444 (ML)", description: "" },
  { type: "Bank", name: "Chase Ink 4451 (CJ)", description: "" },
  { type: "Bank", name: "Bank of America Corp account", description: "" },
  { type: "Bank", name: "Checking 3141", description: "" },
  { type: "Current Asset", name: "Cash", description: "Cash" },
  {
    type: "Accounts Receivable",
    name: "Accounts Receivable",
    description:
      "Outstanding invoices the company has issued out to the client but has not yet received in cash at balance date.",
  },
  {
    type: "Current Asset",
    name: "Prepayments",
    description: "An expenditure that has been paid for in advance.",
  },
  {
    type: "Fixed Asset",
    name: "Less Accumulated Depreciation on Office Equipment",
    description:
      "The total amount of office equipment cost that has been consumed by the entity (based on the useful life)",
  },
  {
    type: "Fixed Asset",
    name: "Less Accumulated Depreciation on Computer Equipment",
    description:
      "The total amount of computer equipment cost that has been consumed by the business (based on the useful life)",
  },
  {
    type: "Accounts Payable",
    name: "Accounts Payable",
    description:
      "Outstanding invoices the company has received from suppliers but has not yet paid at balance date",
  },
  {
    type: "Unpaid Expense Claims",
    name: "Unpaid Expense Claims",
    description:
      "Expense claims typically made by employees/shareholder employees still outstanding.",
  },
  {
    type: "Current Liability",
    name: "Payroll Wages Payable",
    description:
      "Xero automatically updates this account for payroll entries created using Payroll and will store the payroll amount to be paid to the employee for the pay run. This account enables you to maintain separate accounts for employee Wages Payable amounts and Accounts Payable amounts",
  },
  {
    type: "Sales Tax",
    name: "Sales Tax",
    description:
      "The balance in this account represents Sales Tax owing to or from your tax authority. At the end of the tax period, it is this account that should be used to code against either the 'refunds from' or 'payments to' your tax authority that will appear on the bank statement. Xero has been designed to use only one sales tax account to track sales taxes on income and expenses, so there is no need to add any new sales tax accounts to Xero.",
  },
  {
    type: "Current Liability",
    name: "Employee Tax Payable",
    description:
      "The amount of tax that has been deducted from wages or salaries paid to employes and is due to be paid",
  },
  {
    type: "Current Liability",
    name: "Income Tax Payable",
    description:
      "The amount of income tax that is due to be paid, also resident withholding tax paid on interest received.",
  },
  {
    type: "Current Liability",
    name: "Suspense",
    description:
      "An entry that allows an unknown transaction to be entered, so the accounts can still be worked on in balance and the entry can be dealt with later.",
  },
  {
    type: "Historical Adjustment",
    name: "Historical Adjustment",
    description: "For accountant adjustments",
  },
  {
    type: "Rounding",
    name: "Rounding",
    description: "An adjustment entry to allow for rounding",
  },
  {
    type: "Tracking",
    name: "Tracking Transfers",
    description: "Transfers between tracking categories",
  },
  {
    type: "Current Liability",
    name: "Employee Reimbursements ML",
    description: "",
  },
  {
    type: "Current Liability",
    name: "Employee Reimbursements CJ",
    description: "",
  },
  {
    type: "Non-current Liability",
    name: "Loan",
    description: "Money that has been borrowed from a creditor",
  },
  {
    type: "Equity",
    name: "Owners Draw",
    description: "Withdrawals by the owners",
  },
  {
    type: "Retained Earnings",
    name: "Retained Earnings",
    description: "Do not Use",
  },
  {
    type: "Revenue",
    name: "Sales",
    description: "Income from any normal business activity",
  },
  {
    type: "Revenue",
    name: "Other Revenue",
    description:
      "Any other income that does not relate to normal business activities and is not recurring",
  },
  { type: "Revenue", name: "Interest Income", description: "Interest income" },
  { type: "Expense", name: "Ask an Accountant", description: "" },
  {
    type: "Expense",
    name: "Advertising",
    description:
      "Expenses incurred for advertising while trying to increase sales",
  },
  {
    type: "Expense",
    name: "Accounting & CPA",
    description: "Expenses related to paying consultants",
  },
  {
    type: "Expense",
    name: "Entertainment",
    description:
      "Expenses paid by company for the business but are not deductable for income tax purposes.",
  },
  { type: "Expense", name: "Promotional meals 50%", description: "" },
  {
    type: "Expense",
    name: "General Expenses",
    description: "General expenses related to the running of the business.",
  },
  { type: "Expense", name: "Marketing", description: "" },
  {
    type: "Expense",
    name: "Insurance",
    description: "Expenses incurred for insuring the business' assets",
  },
  {
    type: "Expense",
    name: "Equipment",
    description: "Computers and equipment",
  },
  {
    type: "Expense",
    name: "Office Expenses",
    description:
      "General expenses related to the running of the business office. Expenses incurred on postage & delivery costs.",
  },
  {
    type: "Expense",
    name: "Rent",
    description: "The payment to lease a building or area.",
  },
  {
    type: "Expense",
    name: "Wages and Salaries",
    description: "Payment to employees in exchange for their resources",
  },
  { type: "Expense", name: "Health Insurance Premiums", description: "" },
  {
    type: "Expense",
    name: "Payroll - Officer Compensation",
    description: "Payroll - Officer Compensation",
  },
  {
    type: "Expense",
    name: "Payroll - Employer Tax",
    description: "Payroll - Employer Tax",
  },
  {
    type: "Expense",
    name: "Subscriptions & Software",
    description:
      "Subscriptions, software licenses, hosting and online services, etc.",
  },
  {
    type: "Expense",
    name: "Telephone & Internet",
    description:
      "Expenditure incurred from any business-related phone calls, phone lines, or internet connections",
  },
  {
    type: "Expense",
    name: "Travel",
    description: "Expenses incurred from travel which has a business purpose",
  },
  {
    type: "Expense",
    name: "Bad Debts",
    description:
      "Noncollectable accounts receivable which have been written off.",
  },
  {
    type: "Expense",
    name: "Depreciation",
    description:
      "The amount of the asset's cost (based on the useful life) that was consumed during the period",
  },
  {
    type: "Expense",
    name: "Income Tax Expense",
    description: "A percentage of total earnings paid to the government.",
  },
  {
    type: "Expense",
    name: "Interest & Bank fees",
    description:
      "Any interest expenses paid to your tax authority, business bank accounts or credit card accounts. Fees charged by your bank for transactions regarding your bank account(s).",
  },
  {
    type: "Bank Revaluations",
    name: "Bank Revaluations",
    description:
      "Bank account revaluations due for foreign exchange rate changes",
  },
  {
    type: "Unrealized Currency Gains",
    name: "Unrealized Currency Gains",
    description: "Unrealized gains on outstanding items",
  },
  {
    type: "Realized Currency Gains",
    name: "Realized Currency Gains",
    description: "Gains or losses made due to currency exchange rates",
  },

  // QB
  { type: "Bank", name: "1020 Wells Fargo Checking" },
  { type: "Bank", name: "1030 Stripe" },
  { type: "Bank", name: "Depr BoA Checkings (6191)" },
  { type: "Accounts receivable (A/R)", name: "Accounts Receivable" },
  { type: "Other Current Assets", name: "Inventory Asset" },
  { type: "Other Current Assets", name: "Prepaid Expenses" },
  { type: "Other Current Assets", name: "Uncategorized Asset" },
  { type: "Other Current Assets", name: "Undeposited Funds" },
  { type: "Fixed Assets", name: "1060 Fixed Asset Computers" },
  { type: "Accounts payable (A/P)", name: "Accounts Payable" },
  { type: "Credit Card", name: "2005 Barclay Credit Card" },
  { type: "Credit Card", name: "2010 Wells Fargo Credit Card" },
  { type: "Credit Card", name: "2020 BoA Credit Card (6744, CORP)" },
  {
    type: "Other Current Liabilities",
    name: "2030 Employee Reimbursements ML",
  },
  {
    type: "Other Current Liabilities",
    name: "2035 Employee Reimbursements CJ",
  },
  {
    type: "Long Term Liabilities",
    name: "2900 Member Loan to company Account",
  },
  { type: "Long Term Liabilities", name: "2950 Shareholder Notes Payable" },
  { type: "Equity", name: "3000 Opening Balance Equity" },
  { type: "Equity", name: "3500 Shareholder Distribution" },
  { type: "Equity", name: "3800 Retained Earnings" },
  { type: "Income", name: "4000 Sales" },
  { type: "Income", name: "4010 Catchfly sales" },
  { type: "Income", name: "4020 Albert the Pig Sales" },
  { type: "Income", name: "4030 PIPE" },
  { type: "Income", name: "4040 Machine" },
  { type: "Income", name: "4500 Consulting Income" },
  { type: "Income", name: "Billable Expense Income" },
  { type: "Income", name: "Discount Given" },
  { type: "Income", name: "Discounts" },
  { type: "Income", name: "Discounts given" },
  { type: "Income", name: "Income Services" },
  { type: "Income", name: "Sales of Product Income" },
  { type: "Income", name: "Uncategorized Income" },
  { type: "Cost of Goods Sold", name: "Cost of Goods Sold" },
  { type: "Expenses", name: "5010 Bank Charges and Interest" },
  { type: "Expenses", name: "5020 Interest Paid" },
  { type: "Expenses", name: "5030 Upwork fees" },
  { type: "Expenses", name: "5060 Purchase for Albert the Pig" },
  { type: "Expenses", name: "6040 Travel" },
  { type: "Expenses", name: "6050 Promotional meals 50%" },
  { type: "Expenses", name: "6060 Entertainment Meals 100%" },
  { type: "Expenses", name: "6200 Advertising" },
  { type: "Expenses", name: "6250 Conferens and Training" },
  { type: "Expenses", name: "6500 Payroll Employer Tax" },
  { type: "Expenses", name: "6520 Payroll - Temp Exp" },
  { type: "Expenses", name: "6530 Health Insurance Premiums" },
  { type: "Expenses", name: "6550 Compensation of officers" },
  { type: "Expenses", name: "7060 Online services and Subscriptions" },
  { type: "Expenses", name: "7100 Taxes & Licenses" },
  { type: "Expenses", name: "7180 CA Secretary of State Fee" },
  { type: "Expenses", name: "7190 CA Franchise Taxboard" },
  { type: "Expenses", name: "7300 Legal & Professional Fees" },
  { type: "Expenses", name: "7700 Office Expenses" },
  { type: "Expenses", name: "7760 Telephone and Internet" },
  { type: "Expenses", name: "7800 Insurance" },
  { type: "Expenses", name: "7900 Computers/equipment" },
  { type: "Expenses", name: "8050 Rent" },
  { type: "Expenses", name: "Bad Debts" },
  { type: "Expenses", name: "Interest Expense" },
  { type: "Expenses", name: "Uncategorized Expense" },
  { type: "Other Expense", name: "Reconciliation Discrepancies" },
];

export const transactions: Transaction[] = [
  {
    title: "a",
    description: "2012-12-12",
    records: [
      {
        accountId: "",
        amount: 122,
      },
    ],
  },
];
