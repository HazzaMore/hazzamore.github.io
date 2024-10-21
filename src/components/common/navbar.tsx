import "../../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../App";

export const Navbar = () => {
  const { menuactive, handleToggle } = useContext(MenuContext);

  return (
    <NavbarWrapper menuactive={menuactive}>
      <nav className="navbar" data-aos="slide-down">
        <div className="toggle" onClick={handleToggle} />
        <Link to={"/"} className="logo">
          <img
            src={require("../images/Logos/MyLogos/HH_Logo_white.png")}
            width="80px"
            alt=""
          />
        </Link>
      </nav>

      <div className="menu">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about-me"}>About Me</Link></li>
          <li><Link to={"/my-portfolio"}>My Portfolio</Link></li>
          <li><Link to={"/cv"}>CV</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <br/>
          <hr/>
          <li><Link to={"/upcoming"}>Site Todo</Link></li>
        </ul>
      </div>
    </NavbarWrapper>
  );
};

// export default menuactive;

const NavbarWrapper = styled.div<{ menuactive: boolean }>`
  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    background: url(${(props) =>
      props.menuactive
        ? "https://i.ibb.co/rt3HybH/close.png"
        : "https://i.ibb.co/HrfVRcx/menu.png"});
    background-repeat: no-repeat;
    background-size: ${(props) => (props.menuactive ? "25px" : "30px")};
    background-position: center;
    cursor: pointer;
    z-index: 3000; /* Ensure toggle is always on top */
    left: ${(props) => (props.menuactive ? "300px" : "0")};
    transition: 0.3s ease;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${(props) => (props.menuactive ? "2000" : "-2000")};
    transition: 0.5s ease;
  }

  hr {
    z-index: -2000;
    transition: 0;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 4% 5%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    position: relative;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      right: ${(props) => (props.menuactive ? "-300px" : "0")};
      transition: 0.3s ease;
    }
  }

  .menu ul {
    position: relative;
    list-style: none;
  }

  .menu ul li a {
    text-decoration: none;
    font-size: 24px;
    line-height: 2.8rem;
    font-weight: 500;
    color: var(--BlackGrey-colour);
  }

  .menu ul li a:hover {
    color: var(--overlay-colour);
    transition: 0.3s ease-in-out;
  }
`;
