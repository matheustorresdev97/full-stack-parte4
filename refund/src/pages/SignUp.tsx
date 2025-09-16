import { useState } from "react";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { z, ZodError } from "zod";

import { api } from "../services/api";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

const SignUpSchema = z
  .object({
    name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .trim()
      .min(7, "Senha deve ter pelo menos 7 caracteres"),
    passwordConfirm: z.string("Confirme a senha"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = SignUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);

      if (confirm("Cadastrado com sucesso. Ir para tela de login?")) {
        navigate("/");
      }

      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível cadastrar");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        label="Nome"
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <Input
        required
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <Input
        required
        label="Senha"
        type="password"
        placeholder="1234567"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <Input
        required
        label="Confirmação da Senha"
        type="password"
        placeholder="1234567"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
