import React from "react";
import "./styledCustom.scss";

interface ButtonCustomProps {
  icon?: React.ReactNode;
  message?: string;
  onClick?: () => void;
  background?: string;
  className?: string;
  disabled?: boolean;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  icon,
  message,
  onClick,
  background,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${className} btn btn-primary flex justify-center align-center button-custom`}
      style={{ background: background }}
      onClick={onClick}
    >
      <span className="icon material-icons">{icon}</span>
      <span className="btn-label w-600">{message}</span>
    </button>
  );
};

export default ButtonCustom;
