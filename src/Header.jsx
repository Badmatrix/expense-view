/* eslint-disable react/prop-types */
// import { userAcct } from "./App";

export default function Header({ accountDetails }) {
  return (
    <header className="flex justify-between items-center mx-5 py-3 my-3">
      <div className="profile flex">
        <div className="avatar border-4 border-gray-500 md:w-16 w-14 aspect-square flex justify-center align-middle items-center rounded-full">
          <img
            src="/businessman-310819_1280.png"
            alt="avatar"
            className="w-4/5 "
          />
        </div>
        <div className="profile-name mx-3 capitalize font-semibold ">
          <h4>
            welcome back,
            <span className="block font-bold">{ accountDetails.lastName}</span>
          </h4>
        </div>
      </div>
      <div className="notify font-semibold">notification</div>
    </header>
  );
}
