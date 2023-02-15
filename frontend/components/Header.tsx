import Image from "next/image";
import recipe from "../public/img/recipeBook.png";
import headerText from "../public/img/headerText2.png";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  return (
    <>
      <div className="justify-content-around mt-1 d-sm-flex d-none">
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <Image
            src={headerText}
            alt="headerText"
            height={400}
            width={400}
            quality={100}
            className="ms-3"
          />{" "}
        </div>
        <SearchInput />
        <div></div>
        {/* <Image
          src={recipe}
          alt="recipeBook"
          height={400}
          width={400}
          quality={100}
          className="ms-3"
        /> */}
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center mt-3 d-sm-none">
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <Image
            src={headerText}
            alt="headerText"
            height={350}
            width={350}
            quality={100}
            className="ms-3"
          />{" "}
        </div>
      </div>
    </>
  );
};
