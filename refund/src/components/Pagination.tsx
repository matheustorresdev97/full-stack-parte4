import { Button } from "./Button";

import rightSvg from "../assets/right.svg";
import leftSvg from "../assets/left.svg";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button onClick={onPrevious} variant="iconSmall" disabled={current === 1}>
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>

      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>

      <Button onClick={onNext} variant="iconSmall" disabled={current === total}>
        <img src={rightSvg} alt="Ícone de Avançar" />
      </Button>
    </div>
  );
}
