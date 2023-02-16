import Image from "next/image";
import headerText from "../public/img/headerText2.png";

export const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Image
          src={headerText}
          alt="headerText"
          height={400}
          width={400}
          quality={100}
          className="ms-3"
        />
      </div>
    </>
  );
};
