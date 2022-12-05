import Image from "next/image";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { PizzaImage } from "../components/PizzaImage";
import pizza from "../public/img/pizza.png";

type MainTemplateProps = {
  children: JSX.Element;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      {children}
      <PizzaImage />
    </div>
  );
};
