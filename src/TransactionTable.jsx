/* eslint-disable react/prop-types */

export default function TransactionTable({transactions}) {
  return (
    <section className="transactions col-span-1">
      <header className=" py-5">Transactions</header>
      <table className="transactions-header w-full  mx-auto m px-7 bg-white">
        <thead>
          <tr>
            <th>transfer type</th>
            <th>amount(₦)</th>
            <th>purpose</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transfer) => (
            <tr key={transfer.id}>
              <td
                className={`transfer ${
                  transfer.amount > 0 ? "income" : "expense"
                }`}
              >
                {transfer.amount > 0 ? "income" : "expense"}
              </td>
              <td>{Math.abs(transfer.amount)}</td>
              <td>{transfer.purpose}</td>
              <td className="text-sm text-blue-900">
                {new Date(transfer.initiatedAt).toDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
