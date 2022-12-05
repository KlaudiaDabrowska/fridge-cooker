import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <h3 className="text-center m-5 main-logo">~ FRIDGE COOKER ~</h3>
    </Link>
  );
};
