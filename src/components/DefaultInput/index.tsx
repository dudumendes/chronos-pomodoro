type DefaultInputProps = {
  id?: string;
  name?: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  type,
  id,
  name,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input type={type} id={id} name={name} {...rest} />
    </>
  );
}
