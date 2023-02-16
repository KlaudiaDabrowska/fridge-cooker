import Link from "next/link";

interface INavbarLinkProps {
  href: string;
  text: string;
}

export const NavbarLink = ({ href, text }: INavbarLinkProps) => {
  return (
    <div className="mx-3">
      <Link
        href={href}
        passHref
        className="text-decoration-none fs-5 navbartext secondary-text ms-2"
      >
        {text}
      </Link>
    </div>
  );
};
