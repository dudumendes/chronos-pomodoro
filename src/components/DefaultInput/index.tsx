type DefaultInputProps = {
  id?: string;
  name?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ type, id, name }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Task Name</label>
      <input type={type} id={id} name={name} />
    </>
  );
}
