/* eslint-disable react/prop-types */
// import { userAcct } from "./App";
import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
const userAcct = {
  firstName: "hameed",
  lastName: "badmus",
  transactions: [
    {
      id: 1212,
      purpose: "pay for food",
      initiatedAt: "2019-11-18T21:31:17.178Z",
      amount: 4000,
    },
    {
      id: 1213,
      purpose: "stippend",
      initiatedAt: "2019-11-18T21:31:17.178Z",
      amount: -2000,
    },
  ],
  balance: function () {
    return this.transactions.reduce((acc, val) => acc + val.amount, 0);
  },
  income: function () {
    return this.transactions
      .filter((item) => item.amount > 0)
      .reduce((acc, val) => acc + val.amount, 0);
  },
  expense: function () {
    return this.transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, val) => acc + val.amount, 0);
  },
};

export default function Home() {
  const [accountDetails, setAccountDetails] = useState(userAcct);
  return (
    <div className="">
      <Header accountDetails={accountDetails} />
      <Body
        accountDetails={accountDetails}
        setAccountDetails={setAccountDetails}
      />
    </div>
  );
}
