import React, { ChangeEvent, ReactNode } from "react";
import Check from "../../../assets/svg-components/check";

type TextProps = JSX.IntrinsicElements["input"] & {
  placeholder: string;
  value: string;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  isValid?: boolean;
};

const Text = ({
  placeholder,
  value,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
  isValid,
  ...props
}: TextProps) => {
  return (
    <div
      className={[
        "text-field-container",
        fullWidth ? "fullWidth" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <input
        type={"text"}
        className="text-field"
        placeholder={placeholder}
        value={value}
        {...props}
        disabled={disabled}
      />
      <div className="valid-image-container">
        {isValid &&
          (suffix ? (
            suffix
          ) : (
            <Check
              className="icon-img"
              fill={!disabled ? "#2b468a" : "#a1a1a1"}
            />
          ))}
      </div>
    </div>
  );
};

export default Text;
