import "../../App.css";
import styled from "styled-components";
import Navbar from "./navbar";

const NavbarItems = [
  { id:0, name: "Home", href: "/" },
  { id:1, name: "About Me", href: "/about-me" },
  { id:2, name: "My Portfolio", href: "/my-portfolio" },
  { id:3, name: "CV", href: "/cv" },
  { id:4, name: "Contact", href: "/contact" },
];


export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="header-container">
        <div className="my-name-container">
          <h1 className="my-name">Harry Moore</h1>
          <h2 className="job-title">Developer</h2>
        </div>
        <div className="nav-container">
          <Navbar NavbarItems={NavbarItems} />
        </div>
        <div className="login-container">login TBC</div>
      </nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  .header-container {
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
`;
