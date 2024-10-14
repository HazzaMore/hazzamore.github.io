import "../../App.css";
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";
import PortfolioCard from "./card";
import { indesign_icon } from "../../components/images/Logos/logoimages";
import { AnniversaryBook } from "../../components/images/PortfolioImages/portfolioimages";
import { AnniversaryBookPopup } from "./popups";

//TO DO: Add the option to tab between code related and creative projects

const Portfolio = () => {
  const { menuactive } = useContext(MenuContext);

  return (
    <PortfolioWrapper menuactive={menuactive}>
      <div className="portfolio" id="blur">
        <div className="background TransformRight" />
        <section className="text TransformRight" data-aos="fade">
          <h1>My Portfolio</h1>
        </section>
        <section className="Portfolio_container TransformRight" data-aos="fade">
          <PortfolioCard
            cardtitle="Loserfruit Anniversary Book 2024"
            mainpicture={AnniversaryBook}
            software="InDesign"
            softwareicon={indesign_icon}
            // popup={<AnniversaryBookPopup/>}
            // delay={amount}
          />
        </section>
      </div>
    </PortfolioWrapper>
  );
};

export default Portfolio;

const PortfolioWrapper = styled.div<{ menuactive: boolean }>`
  .portfolio {
    position: absolute;
    right: 0;
    width: 100%;
    min-height: 100vh;
    padding: 5%;
    margin-top: 60px;
    align-items: center;
    transition: var(--default-transition);
    z-index: 2;
  }

  .TransformRight {
    transform: translateX(${(props) => (props.menuactive ? `300px` : "0")});
    transition: 0.3s ease;
  }

  h1 {
    font-size: 3em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
    margin-top: 3rem;
    margin: 3rem;
  }

  .Portfolio_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
    align-items: center;
    gap: 2.3rem;
    margin-top: 4.2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    z-index: 4;
  }

  @media screen and (max-width: 1600px) {
    .Portfolio_container {
      grid-template-columns: repeat(3, 1fr);
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .Portfolio_container {
      grid-template-columns: repeat(2, 1fr);
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .Portfolio_container {
      grid-template-columns: repeat(1, 1fr);
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
`;
