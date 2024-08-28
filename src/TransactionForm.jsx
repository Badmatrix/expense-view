/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function TransactionForm({ accountDetails, setAccountDetails }) {
  const [transactions, setTransactions] = useState(accountDetails.transactions);
  const [amount, setAmount] = useState("");
  const [purpose, setPupose] = useState("");
  const [transferType, setTransferType] = useState("recieved");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !purpose) return;
    const amtSent = transferType === "recieved" ? amount : -amount;
    const newtrans = {
      id: Date.now(),
      amount: amtSent,
      purpose,
      initiatedAt: new Date().toISOString(),
      // transferType,
    };
    setTransactions((items) => [...items, newtrans]);
  }
  useEffect(
    function () {
      setAccountDetails({ ...accountDetails, transactions });
    },
    [transactions]
  );

  return (
    <div className="my-16 py-5 mx-3 col-span-1">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          transfer
          <select
            name=""
            value={transferType}
            onChange={(e) => setTransferType(e.target.value)}
            className=" capitalize"
          >
            <option disabled>---enter transfer type---</option>
            <option value="recieved">recieved</option>
            <option value="sent">sent</option>
          </select>
        </label>
        <label htmlFor="">
          amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="enter amount"
          />
        </label>

        <label htmlFor="">
          purpose
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPupose(e.target.value)}
            placeholder="enter transfer purpose..."
          />
        </label>
        <div className="btn flex ml-10 md;ml-0 md:justify-end md:mr-20 lg:mr-40 my-7 ">
          <button className="bg-blue-500 rounded-xl text-white font-semibold px-3 py-2 w-32 hover:bg-blue-700">
            save
          </button>
        </div>
      </form>
    </div>
  );
}
