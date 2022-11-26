import { Cormorant_SC } from "@next/font/google";

const cormorant = Cormorant_SC({ weight: "500" });

export const Header = () => {
  return (
    <h3 className={(cormorant.className, "text-center mt-5 main-logo")}>
      ~ FRIDGE COOKER ~
    </h3>
  );
};
