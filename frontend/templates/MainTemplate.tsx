import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Header } from "../components/Header";
import pizza from "../public/img/pizza.png";

type MainTemplateProps = {
  children: JSX.Element;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Container fluid>
      <Navbar className="justify-content-end">
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar>
      <Header />
      {children}
      <Image src={pizza} alt="pizza" />
    </Container>
  );
};
