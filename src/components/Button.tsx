import { FC, ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<buttonProps> = (props) => {
  return <button className="button" {...props} />;
};
