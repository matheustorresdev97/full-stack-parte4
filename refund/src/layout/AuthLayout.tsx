import { Outlet } from "react-router";

import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-full min-h-screen h-auto bg-gray-400 flex flex-col justify-center items-center text-gray-100">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col w-[320px] md:min-w-[462px]">
        <img className="my-8" src={logoSvg} alt="Logo" />
        <Outlet />
      </main>
    </div>
  );
}
