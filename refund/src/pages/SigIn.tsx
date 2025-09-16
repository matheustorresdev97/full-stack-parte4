import { useState } from "react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsloading(true);
    
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
    console.log(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        name="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <Input
        required
        name="Senha"
        type="password"
        placeholder="1234567"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <Link
        to={"/signup"}
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </Link>
    </form>
  );
}
