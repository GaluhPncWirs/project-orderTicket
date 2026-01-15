import Button from "../../components/button/content";
import "./style.scss";

type propsCardComp = {
  srcImg: string;
  altImg: string;
  btnTitle: string;
  children: React.ReactNode;
};

export default function CardComponent(props: propsCardComp) {
  const { srcImg, altImg, btnTitle, children } = props;

  return (
    <div className="card">
      <img src={srcImg} alt={altImg} />
      <div className="card__desc">
        <div>{children}</div>
        <Button
          btnType="button"
          btnTitle={btnTitle}
          handleClick={() => false}
        />
      </div>
    </div>
  );
}
