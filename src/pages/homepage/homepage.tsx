import "../../App.css"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MenuContext } from "../../App";
import { BsLinkedin, BsYoutube, BsInstagram, BsTwitterX  } from "react-icons/bs";

const Homepage = () => {

  const { menuActive } = useContext(MenuContext);

  return (
    <HomepageWrapper menuActive={menuActive}>
      <video
        className="BackgroundVideo TransformLeft"
        src={require('../../components/videos/Gradient_loop.mp4')}
        playsInline
        muted
        loop
        autoPlay
        />
      <div className="TransformLeft">
        <section className="text" data-aos="fade">
        <h2>Where Cloud <br/> Development </h2> 
        <h3 data-aos="fade" data-aos-delay="1000">Meets Creativity</h3>
        <p className="index_paragraph" data-aos="fade" data-aos-delay="2400" data-aos-anchor="text">Discover how Harry/Hazza can empower your company</p>
        <a href="/about-me" data-aos="fade" data-aos-delay="2400" data-aos-anchor="index_paragraph">See More</a>
        </section>  
      </div>
      <footer>
        <ul className="social TransformLeft">
          <li className="social_icon">
            <Link to="//www.youtube.com/@HazzaMore" >
              <BsYoutube size = { 70 }/>
            </Link>
          </li>
          <li className="social_icon">
            <Link to="//www.linkedin.com/in/harrymooremeng/" >
              <BsLinkedin size = { 60 }/>
            </Link>
          </li>
          <li className="social_icon">
            <Link to="//x.com/HazzaMoreEdits" >
              <BsTwitterX  size = { 60 }/>
            </Link>
          </li>
          <li className="social_icon">
            <Link to="//www.instagram.com/harrymooreuk/" >
              <BsInstagram size = { 60 }/>
            </Link>
          </li>
        </ul>
      </footer>
    </HomepageWrapper>
  );
};

export default Homepage;

// ${ props => props.menuActive ? '0' : '300px'}
const HomepageWrapper = styled.div<{ menuActive: boolean }>`

  .TransformLeft {
    transform: translateX(${ props => props.menuActive ? '300px' : '0'});
    transition: 0.3s ease;
  }

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

  .showcase {
    padding: 10%;
    justify-content: space-between;
  }

  .text {
    vertical-align: middle;
    z-index: 10;
    transition: var(--default-transition);
    padding-top: 30vh;
    padding-left: 10%;
  }

  .text h2 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
  }

  .text h3 {
    font-size: 3em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
  }

  .text p {
    font-size: 1.1em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
    transition: var(--default-transition);
  }

  /* See More button */
  .text a, .popup_container a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: var(--BlackGrey-colour);
    letter-spacing: 2px;
    transition: var(--default-transition);
  }
  .text a:hover {
    font-size: 1.1em;
    background-color: var(--website_blue);
  }

  .social {
  position: absolute;
  left: 10%;
  z-index: 10;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 120%
}
.social li {
  list-style: none;
}
.social li a {
  display: inline-block;
  margin-right: 5px;
  filter: brightness(0) invert(1);
  transform: scale(0.3);
  transition: var(--default-transition);
}
.social li a:hover {
  transform: scale(0.5) translateY(-15px);
}

@media screen and (max-width: 900px) {
  .showcase, .showcase header{padding: 30px;}
  .text h2{ font-size: 2.8em;}
  .text h3{font-size: 1.5em;}
  .text p{margin-right: 150px;}
  .text h4 {font-size: 2.5rem;}
}
`
