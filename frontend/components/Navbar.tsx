import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  //hardcoded
  const isLoggedin = true;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar-expand-lg justify-content-end">
      {isLoggedin ? (
        <>
          <div>Hello, user!</div>
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
