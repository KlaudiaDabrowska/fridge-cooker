import Image from "next/image";
import pizza from "../public/img/pizza.png";

export const PizzaImage = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <Image src={pizza} alt="pizza" height={500} width={500} />
      </div>
      <div className="d-md-none">
        <Image src={pizza} alt="pizza" height={300} width={300} />
      </div>
    </>
  );
};
