import styles from "./styles.module.css";

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

      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        {...rest}
      />
    </>
  );
}
