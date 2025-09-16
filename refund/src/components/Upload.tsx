import uploadSvg from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <fieldset className="flex flex-col flex-1 max-h-20 text-gray-200">
      <label className="uppercase text-xs mb-2 text-inherit" htmlFor="upload">
        Comprovante
      </label>

      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        <input
          className="hidden"
          type="file"
          id="upload"
          name="upload"
          {...rest}
        />

        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 hover:bg-green-200 transition ease-linear"
          htmlFor="upload"
          aria-label="Fazer upload de comprovante"
        >
          <img className="w-6 h-6" src={uploadSvg} alt="Ícone de upload" />
        </label>
      </div>
    </fieldset>
  );
}
