import { Cormorant_SC } from "@next/font/google";
import Link from "next/link";

const cormorant = Cormorant_SC({ weight: "500" });

export const Header = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <h3 className={(cormorant.className, "text-center m-5 main-logo")}>
        ~ FRIDGE COOKER ~
      </h3>
    </Link>
  );
};
