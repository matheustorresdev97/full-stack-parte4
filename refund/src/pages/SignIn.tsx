import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

const sigInSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().trim().min(1, "Informe a senha"),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  const auth = useAuth();

  async function signIn(_: any, formData: FormData) {
    try {
      const data = sigInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        required
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        name="email"
      />

      <Input
        required
        label="Senha"
        type="password"
        placeholder="1234567"
        name="password"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
