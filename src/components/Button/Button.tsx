import React, { MouseEvent } from "react";

import "./Button.css";
import "../common.css";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "neutral" | "link";
  underlined?: boolean;
  disable?: boolean;
  size?: "small" | "large";
  onClick: (e?: MouseEvent) => void;
};

const Button = (props: ButtonProps) => {
  const disable = props.disable ? "itauros-ui-button--disabled" : "";
  const isDisabled = props.disable ? props.disable : false;
  const isUnderlined = props.variant === "link" && props.underlined;
  const size = props.size ? props.size : "";

  return (
    <button
      type="button"
      disabled={isDisabled}
      {...props}
      className={[
        "itauros-ui-button-property",
        size !== "" ? `itauros-ui-button--${size}` : "",
        `itauros-ui-button--${props.variant}`,
        isUnderlined ? `itauros-ui-button--underlined` : "",
        disable,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
