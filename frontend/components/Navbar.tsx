import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useUserLogin } from "../lib/hooks/useUserLogin";
import { NavbarLink } from "./NavbarLink";
import Image from "next/image";
import logo from "../public/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export const Navbar = () => {
  const { data: session } = useSession();

  const isUserLogin = useUserLogin();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg shadow py-0">
      <div className={`${isUserLogin ? "col-md-11" : "col-md-10"}`}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={75}
            width={75}
            quality={100}
            className="ms-2"
          />
        </Link>
      </div>
      <div>
        {isUserLogin ? (
          <div className="d-flex align-items-center">
            <GiHamburgerMenu
              onClick={handleShow}
              size="1.2em"
              style={{ cursor: "pointer" }}
            />
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                {" "}
                Hello, {session && session?.user?.email}!
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column flex-column justify-content-around align-items-center secondary-background border border-2">
                <button className="btn">- YOUR FRIDGE -</button>
                <button className="btn">- YOUR FAVOURITE RECIPES -</button>
                <button className="btn">- ALL RECIPES -</button>
                <button className="btn" onClick={() => signOut()}>
                  - LOGOUT -
                </button>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <NavbarLink href="/login" text="Login" />
            <NavbarLink href="/register" text="Register" />
          </div>
        )}
      </div>
    </nav>
  );
};
