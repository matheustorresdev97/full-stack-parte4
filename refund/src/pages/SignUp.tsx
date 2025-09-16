import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useState } from "react";
import { Link } from "react-router";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, pwdConfirm);

    if (password !== pwdConfirm) {
      return alert("Senhas diferentes");
    }

    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        name="Nome"
        type="name"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

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

      <Input
        required
        name="Confirmação da Senha"
        type="password"
        placeholder="1234567"
        onChange={(e) => setPwdConfirm(e.target.value)}
        value={pwdConfirm}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <Link
        to="/"
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
