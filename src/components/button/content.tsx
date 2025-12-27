import React from "react";
import "./style.scss";

interface ButtonTypeProps {
  btnType: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  btnTitle: string;
}

export default class Button extends React.Component<ButtonTypeProps> {
  render(): React.ReactNode {
    const { btnType = "button", btnTitle } = this.props;

    return (
      <button className="btnSearch" type={btnType}>
        {btnTitle}
      </button>
    );
  }
}
