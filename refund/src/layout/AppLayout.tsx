import { Outlet } from "react-router";
import { Header } from "../components/Header";


export function AppLayout() {
  return (
    <div className="w-full min-h-screen h-auto bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="px-3 pt-3 pb-6 w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
