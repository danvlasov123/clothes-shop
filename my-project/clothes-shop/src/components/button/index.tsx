import { ReactNode } from "react";

interface IButton {
  children: string | ReactNode;
  variant?: string;
  className?: string;
}

const Button = (props: IButton): JSX.Element => {
  const { children, variant = "light", className } = props;
  return (
    <button
      className={`block rounded-full py-1.5 px-5 ${
        variant === "light" && "bg-white hover:bg-slate-400"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
