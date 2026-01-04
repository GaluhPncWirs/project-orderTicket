import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button/content";
import "./style.scss";

type textSidebarProps = {
  imgAlt: string;
  imgSrc: string;
  textContent: string;
  subTextContent: string;
  children: React.ReactNode;
};

export default function TextSidebarClick(props: textSidebarProps) {
  const arrowRight = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { children, imgSrc, imgAlt, textContent, subTextContent } = props;

  useEffect(() => {
    function handleClickOutsideComponent(event: any) {
      if (arrowRight.current && !arrowRight.current.contains(event.target)) {
        setIsOpen(true);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () => {
      document.removeEventListener("click", handleClickOutsideComponent);
    };
  }, []);

  return (
    <div ref={arrowRight}>
      <button onClick={() => setIsOpen(!isOpen)} className="btnTrigger">
        <div className="btnTrigger__textContent">
          <img src={imgSrc} alt={imgAlt} />
          <h4>{textContent}</h4>
        </div>
        <ChevronRight
          className={`btnTrigger__arrow ${isOpen && `turnBottom`}`}
        />
      </button>
      <div className={`containerFilter ${isOpen && `showContent`}`}>
        <h4>{subTextContent}</h4>
        <span className="horizontalLine" />
        {children}
        <span className="horizontalLine" />
        <Button
          btnTitle="Terapkan"
          btnType="button"
          handleClick={() => false}
        />
      </div>
    </div>
  );
}
