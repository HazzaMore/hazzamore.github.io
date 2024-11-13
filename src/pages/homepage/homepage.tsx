import "../../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

import {
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsTwitterX,
  BsArrowRight,
} from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { background_video } from "../../components/videos/videoslist";

import { FlipWords } from "./flip-words";

const SOCIALS = [
  {
    id: 0,
    name: "Youtube",
    href: "//www.youtube.com/@HazzaMore/",
    icon: <BsYoutube size={30} />,
  },
  {
    id: 1,
    name: "LinkedIn",
    href: "//www.linkedin.com/in/harrymooremeng/",
    icon: <BsLinkedin size={30} />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "//x.com/HazzaMoreEdits/",
    icon: <BsTwitterX size={30} />,
  },
  {
    id: 3,
    name: "Instagram",
    href: "//www.instagram.com/harrymooreuk/",
    icon: <BsInstagram size={30} />,
  },
  {
    id: 4,
    name: "Email",
    href: "//Harry.Moore.MEng@gmail.com/",
    icon: <IoIosMail size={30} />,
  },
];

const Roles = [
  "a Cloud Engineer",
  "a Front End Developer",
  "a Back End Developer",
  "a Video Editor",
  "a Graphic Designer",
  "an Engineer",
];

const Homepage = () => {
  return (
    <HomepageWrapper>
      <div className="background-overlay" />
      <video
        className="BackgroundVideo "
        src={background_video}
        playsInline
        muted
        loop
        autoPlay
      />

      <div className="default-borders">
        <div className="full-container">
          <div className="main-container">
            <div className="text-container">
              <div className="title-container">
                <h1 className="title">Creating Code Solutions</h1>
                <h2 className="secondary-title">
                  With an Appreciation for Good Design
                </h2>
              </div>
              <div className="introduction-container">
                <p>
                  Hi, I am Harry Moore,
                  <FlipWords words={Roles} />
                  from the UK
                  <br />
                  Click below to find out more about me and my work
                </p>
                <Link className="button-to-aboutme" to={"/"}>
                  Dive In <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <h1 className="footer-text">
              Want to get in contact? Find me on my socials:
            </h1>
            <ul className="social">
              {SOCIALS.map((social) => (
                <li key={social.id}>
                  <Link to={social.href}>{social.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="main-container">
          <div className="text-container">
            <div className="text-container-main">
              <h1 className="title">Creating Code Solutions</h1>
              <h2 className="secondary-title">
                With an Appreciation for Good Design
              </h2>
              <div className="introduction">
                <p>
                  Hi, I am Harry Moore,
                  <FlipWords words={Roles} />
                  from the UK
                  <br />
                  Click below to find out more about me and my work
                </p>
                <Link className="button-to-aboutme" to={"/"}>
                  Dive In <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="footer">
              <h1 className="footer-text">
                Want to get in contact? Find me on my socials:
              </h1>
              <ul className="social">
                {SOCIALS.map((social) => (
                  <li key={social.id} className="social_icon">
                    <Link to={social.href}>{social.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </HomepageWrapper>
  );
};

export default Homepage;

const HomepageWrapper = styled.div`
  .BackgroundVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: -3;
  }

  .background-overlay {
    height: 200px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }

  .full-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    // background: rgba(0, 300, 0, 1);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
    height: 150px;
    width: 100%;
    // background: rgba(300, 0, 0, 1);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
    width: 100%;
    // background: rgba(0, 0, 0, 1);
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 300px;
    // background: rgba(0, 0, 300, 1);
  }

  .introduction-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 40%;
    // background: rgba(0, 0, 300, 1);

    color: #fff;
  }

  .title {
    font-size: calc(3.5vw + 3.5vh);
    font-weight: 800;
    color: #fff;
    line-height: 1.5em;
    transition: var(--default-transition);
  }

  .secondary-title {
    font-size: calc(2vw + 2vh);
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    transition: var(--default-transition);
  }

  .introduction-container p {
    font-size: calc(0.8vw + 0.8vh);
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    transition: var(--default-transition);
  }

  .footer-text {
    color: #fff;
    align-self: center;
  }

  .social {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    filter: brightness(0) invert(1);
  }


  // @media screen and (max-width: 900px) {
  //   .showcase,
  //   .showcase header {
  //     padding: 30px;
  //   }
  //   .text h2 {
  //     font-size: 2.8em;
  //   }
  //   .text h3 {
  //     font-size: 1.5em;
  //   }
  //   .text p {
  //     margin-right: 150px;
  //   }
  //   .text h4 {
  //     font-size: 2.5rem;
  //   }
  // }
`;
