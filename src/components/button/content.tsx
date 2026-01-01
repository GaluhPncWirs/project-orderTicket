import React from "react";
import "./style.scss";

interface ButtonTypeProps {
  btnType: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  btnTitle: string;
  handleClick: () => void;
}

export default class Button extends React.Component<ButtonTypeProps> {
  render(): React.ReactNode {
    const {
      btnType = "button",
      btnTitle,
      handleClick = () => false,
    } = this.props;

    return (
      <button className="btnSearch" type={btnType} onClick={handleClick}>
        {btnTitle}
      </button>
    );
  }
}
