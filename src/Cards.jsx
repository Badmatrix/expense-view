/* eslint-disable react/prop-types */

export default function Cards({transactions}) {

  return (
    <div className=" md:mt-16 mt-12 md:grid md:grid-cols-2 md:gap-4">
      <div className="balance-card h-48 md:h-60 md:mx-auto md:w-[450px] mx-3 bg-blue-800 py-3 px-3 rounded-2xl  text-white col-span-1 flex justify-between text-center">
        <h2 className="font-medium text-lg leading-normal ">
          balance
          <span className="block font-semibold text-2xl">
            {transactions.balance()}
          </span>
        </h2>
        <button
          className=" cursor-pointer font-bold text-3xl h-10 border-2 rounded-full aspect-square"
          title="add new expense"
        >
          +
        </button>
      </div>
      <div className="transaction-cards md:h-60 col-span-1 flex justify-between md:block mx-auto w-11/12 absolute md:static top-[270px] left-0 right-0  md:top-auto md:left-auto">
        <div className="card income">
          income
          <span>{transactions.income()}</span>
        </div>
        <div className="card outgone">
          expense
          <span>{Math.abs(transactions.expense())}</span>
        </div>
      </div>
    </div>
  );
}
