import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center max-w-[1185px] mx-auto mb-6.5">
      <img className="my-8" src={logoSvg} alt="Logo" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá, Matheus !</span>
        <img
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
          src={logoutSvg}
          alt="Sair da conta"
        />
      </div>
    </header>
  );
}
