import "../../App.css";
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";
import PortfolioCard from "./card";
import { adobe_photoshop_icon, adobe_premiere_pro_icon, blender_icon, html_icon, indesign_icon, python_icon, ubuntu_icon } from "../../components/images/Logos/logoimages";
import { AnniversaryBook, BlenderWork, CodeAutomation, EmoteArtworkPreview, LivBevanWork, MoreLoserfruit, Pi5, WebsitePreview } from "../../components/images/PortfolioImages/portfolioimages";
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
          {[
            {
              cardtitle: "Loserfruit Anniversary Book 2024",
              mainpicture: AnniversaryBook,
              software: "InDesign",
              softwareicon: indesign_icon,
            },
            {
              cardtitle: "MoreLoserfruit Channel Editing",
              mainpicture: MoreLoserfruit,
              software: "Premiere Pro",
              softwareicon: adobe_premiere_pro_icon,
            },
            {
              cardtitle: "Loserfruit Twitch channel emotes and badges",
              mainpicture: EmoteArtworkPreview,
              software: "Photoshop",
              softwareicon: adobe_photoshop_icon,
            },
            {
              cardtitle: "Work for Unique Team Building, Australia",
              mainpicture: BlenderWork,
              software: "Blender",
              softwareicon: blender_icon,
            },
            {
              cardtitle: "TikTok Reaction for Liv Bevan",
              mainpicture: LivBevanWork,
              software: "Premiere Pro",
              softwareicon: adobe_premiere_pro_icon,
            },
            {
              cardtitle: "Website Design",
              mainpicture: WebsitePreview,
              software: "Html & Css",
              softwareicon: html_icon,
            },
            {
              cardtitle: "Raspberry Pi 5 Projects",
              mainpicture: Pi5,
              software: "Ubuntu",
              softwareicon: ubuntu_icon,
            },
            {
              cardtitle: "Automation Projects",
              mainpicture: CodeAutomation,
              software: "Python",
              softwareicon: python_icon,
            },
          ].map((card, index) => (
            <PortfolioCard
              key={index}
              cardnumber={index + 1}
              animation_delay={1000 + index * 200}
              cardtitle={card.cardtitle}
              mainpicture={card.mainpicture}
              software={card.software}
              softwareicon={card.softwareicon}
              // popup={<AnniversaryBookPopup/>}
              // delay={amount}
            />
          ))}
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
