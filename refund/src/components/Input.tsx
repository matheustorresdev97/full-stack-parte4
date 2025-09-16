type Props = React.ComponentProps<"input"> & {
  name?: string;
};

export function Input({ name, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-col flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {name && (
        <label className="uppercase text-xs mb-2 text-inherit" htmlFor={name}>
          {name}
        </label>
      )}

      <input
        type={type}
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 focus:placeholder-gray-300"
        {...rest}
        id={name}
      />
    </fieldset>
  );
}
