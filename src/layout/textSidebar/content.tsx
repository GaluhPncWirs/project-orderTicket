import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button/content";
import "./style.scss";

type textSidebarProps = {
  imgSrc: string;
  imgAlt: string;
  textContent: string;
  subTextContent: string;
  children: React.ReactNode;

  defaultOpen?: boolean;
  onApply: () => void;
};

export default function TextSidebarClick(props: textSidebarProps) {
  const {
    children,
    imgSrc,
    imgAlt,
    textContent,
    subTextContent,
    defaultOpen = false,
    onApply,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideComponent(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () => {
      document.removeEventListener("click", handleClickOutsideComponent);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="btnTrigger"
      >
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
        <Button btnTitle="Terapkan" btnType="button" handleClick={onApply} />
      </div>
    </div>
  );
}
