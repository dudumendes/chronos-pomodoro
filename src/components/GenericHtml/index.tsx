import style from "./styles.module.css";

type GenericProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericProps) {
  return <div className={style.genericHtml}>{children}</div>;
}
