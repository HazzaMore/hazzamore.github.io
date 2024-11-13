import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

interface NavbarProps {
  NavbarItems: { id: number; name: string; href: string }[];
}

const Navbar = ({ NavbarItems }: NavbarProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function moveIndicator(e: React.MouseEvent<HTMLLIElement>) {
    const marker = document.getElementById("marker");
    const links = document.querySelectorAll("ul li");
    const activeLink = links[activeIndex] as HTMLElement;

    if (marker && activeLink) {
      marker.style.left = activeLink.offsetLeft + "px";
      marker.style.width = activeLink.offsetWidth + "px";
    }
  }

  function handleMouseover(index: number) {
    setActiveIndex(index);
  }

  return (
    <NavbarWrapper>
      <ul>
        {NavbarItems.map((item) => (
          <li
            key={item.id}
            className={activeIndex === item.id ? "active" : ""}
            onMouseMove={moveIndicator}
            onMouseOver={() => handleMouseover(item.id)}
          >
            <a href={item.href}>
              <span className="ion-icon">{item.name}</span>
            </a>
          </li>
        ))}
        <div id="marker"></div>
      </ul>

      {/* <div className="navbar-top">
        {NavbarItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <button className="nav-button">{item.name}</button>
          </Link>
        ))}
      </div> */}
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
    list-style: none;
  }

  ul li a {
    position: relative;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 20px 20px;
    z-index: 1000;
    backdrop-filter: blur(15px);
  }

  ul li a .ion-icon {
    font-size: 1em;
    pointer-events: none;
    opacity: 0.25;
    transition: 0.25s;
  }

  ul li.active a .ion-icon {
    opacity: 1;
  }

  #marker {
    position: absolute;
    top: 0;
    transition: 0.5s;
    z-index: 1;
  }

  #marker::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 40px;
    border-radius: 8px;
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

  ul li.active ~ #marker::before {
  background: #5da6ff;
  box-shadow: 0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff, 0 0 60px #5da6ff;
  }
`;
