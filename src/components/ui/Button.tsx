import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "text";
type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ...attributes } = props;
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const linkAttributes = attributes as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "className" | "children"
    >;
    return (
      <a className={classNames} {...linkAttributes} href={props.href}>
        {children}
      </a>
    );
  }

  const buttonAttributes = attributes as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;
  return (
    <button className={classNames} {...buttonAttributes}>
      {children}
    </button>
  );
}
