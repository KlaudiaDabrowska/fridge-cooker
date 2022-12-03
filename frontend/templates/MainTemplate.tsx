import Image from "next/image";
import { Header } from "../components/Header";
import { NavbarLink } from "../components/NavbarLink";
import pizza from "../public/img/pizza.png";

type MainTemplateProps = {
  children: JSX.Element;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg justify-content-end">
        <NavbarLink href="/login" text="Login" />
        <NavbarLink href="/register" text="Register" />
      </nav>
      <Header />
      {children}
      <div className="d-none d-md-block">
        <Image src={pizza} alt="pizza" height={500} width={500} />
      </div>
      <div className="d-md-none">
        <Image src={pizza} alt="pizza" height={300} width={300} />
      </div>
    </div>
  );
};
