/* eslint-disable react/prop-types */

import Cards from "./Cards";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

export default function Body({ accountDetails, setAccountDetails }) {
  return (
    <main className="">
      <Cards transactions={accountDetails} />
      <div className="md:grid md:grid-cols-2 my-10 gap-4">
        <TransactionForm
          accountDetails={accountDetails}
          setAccountDetails={setAccountDetails}
        />
        <TransactionTable transactions={accountDetails.transactions} />
      </div>
    </main>
  );
}
