import '../../App.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../App";

export const Navbar = () => {

  const { menuActive, handleToggle, offsetWidth } = useContext(MenuContext);

  return (
    <NavbarWrapper menuActive={menuActive} offsetWidth={offsetWidth}>
      <nav className="navbar" data-aos="slide-down">
        <Link to={"/"} className="logo">
          <img src={require('../images/Logos/MyLogos/HH_Logo_white.png')} width="80px" alt="" />
        </Link>
        <div className="toggle" onClick={handleToggle} />
      </nav>

      <div className="menu">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about-me"}>About Me</Link></li>
          <li><Link to={"/my-portfolio"}>My Portfolio</Link></li>
          <li><Link to={"/cv"}>CV</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </NavbarWrapper>
  );
};

// export default menuActive;

const NavbarWrapper = styled.div<{ menuActive: boolean, offsetWidth: number }>`


  .toggle {
    position: sticky;
    width: 60px;
    height: 60px;
    background: url(${props => props.menuActive ? 'https://i.ibb.co/rt3HybH/close.png' : 'https://i.ibb.co/HrfVRcx/menu.png'});
    background-repeat: no-repeat;
    background-size: ${props => props.menuActive ? '25px' : '30px'};
    background-position: center;
    cursor: pointer;
    z-index: 3000; /* Ensure toggle is always on top */
    right: ${props => props.menuActive ? '300px' : '0'};
    transition: 0.3s ease;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${props => props.menuActive ? '2000' : '-2000'};
    transition: 0.3s ease;
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
    text-transform: uppercase;
    cursor: pointer;
    list-style: none;
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
    transition: 0.3s;
  }
`;
