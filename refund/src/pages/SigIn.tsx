import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input required name="E-mail" type="email" placeholder="seu@email.com" />

      <Input required name="Senha" type="password" placeholder="1234567" />

      <Button>Entrar</Button>
    </form>
  );
}
