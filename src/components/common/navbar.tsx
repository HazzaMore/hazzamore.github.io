import "../../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";


const NavbarItemsTop = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "My Portfolio", href: "/my-portfolio" },
  { name: "CV", href: "/cv" },
  { name: "Contact", href: "/contact" },
];

const NavbarItemsBottom = [{ name: "Site Todo", link: "/upcoming" }];

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav className="navbar-container">
        <div className="my-name-container">
          <h1 className="my-name">Harry Moore</h1>
          <h2 className="job-title">Developer</h2>
        </div>
        <div className="nav-container">
          <div className="navbar-top">
            {NavbarItemsTop.map((item) => (
            <Link key={item.href} to={item.href}>
              <button className="nav-button">{item.name}</button>
            </Link>
            ))}
          </div>
        </div>
        <div className="login-container">login TBC</div>
      </nav>
    </NavbarWrapper>
  );
};


const NavbarWrapper = styled.div`
  .navbar-container {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .my-name-container {
    width: 100px;
  }

  .nav-container {
    display: flex;
    height: 50px;
    border-radius: 50px;
    backdrop-filter: blur(15px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    glow: 0 0 10px #fff;
  }

  .login-container {
    color: #fff;
    width: 100px;
    text-align: right;
  }

  .my-name {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }

  .job-title {
    font-size: 0.8rem;
    font-weight: 400;
    color: #aaa;
  }

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
