import { useSession } from "next-auth/react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useUserLogin } from "../lib/hooks/useUserLogin";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const { data: session } = useSession();

  const isUserLogin = useUserLogin();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg justify-content-end">
      {isUserLogin ? (
        <>
          <div>Hello, {session && session?.user?.email}</div>
          <div onClick={handleShow}>IKONA HAMBURGERA</div>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <button>- YOUR FRIDGE -</button>
              <button>- YOUR FAVOURITE RECIPES -</button>
              <button>- ALL RECIPES -</button>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <>
          <NavbarLink href="/login" text="Login" />
          <NavbarLink href="/register" text="Register" />
        </>
      )}
    </nav>
  );
};
