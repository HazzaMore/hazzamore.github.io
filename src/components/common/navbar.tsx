import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavbarProps {
  NavbarItems: { id: number; name: string; href: string }[];
}

const Navbar = ({ NavbarItems }: NavbarProps) => {
  return (
    <NavbarWrapper>
      <div className="navbar-top">
        {NavbarItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <button className="nav-button">{item.name}</button>
          </Link>
        ))}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  .navbar-top {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  }

  .nav-button {
    color: #fff;
    background-color: transparent;
    border: none;
  }
`;
