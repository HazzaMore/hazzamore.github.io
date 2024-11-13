import "../../App.css";
import { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { Cards } from "./data";
// import { PortfolioCardWrapper } from "./card-layout";
import PortfolioCard from "./card-layout-v2";
import { Popups, PopupWrapper } from "./popups";

import { RxCross2 } from "react-icons/rx";

const Portfolio = () => {
  
  const MenuHeaders = ["All", "Code", "Creative"];
  const [menuChoice, setMenuChoice] = useState<string>(MenuHeaders[0]);
  const FilteredCards =
    menuChoice === "All"
      ? Cards
      : Cards.filter((Card) => Card.type === menuChoice);

  const [popupContent, setPopupContent] = useState<any[]>([]);
  const [popupToggle, setPopupToggle] = useState<boolean>(false);

  const openPopup = (selected_card: any) => {
    setPopupContent([selected_card]);
    setPopupToggle(true);
  };
  const closePopup = () => {
    setPopupToggle(false);
  };

  return (
    <PortfolioWrapper >
      <div className="default_container">
        <div className="background " />
        <section className="" data-aos="fade">
          <h1 className="header">My Portfolio</h1>
        </section>
        <section className="">
          <MenuChoiceWrapper>
            <div className="choice-type-container">
              <div className="choice-type-tabs">
                {MenuHeaders.map((label, index) => (
                  <button
                    key={index}
                    className={`choice-type-tab ${
                      menuChoice === label ? "active" : ""
                    }`}
                    onClick={() => setMenuChoice(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </MenuChoiceWrapper>
        </section>
        <section className="Portfolio_container " data-aos="fade">
          {FilteredCards.map((selected_card, index) => (
            <a
              className="portfolio_btn"
              onClick={() => {
                openPopup(selected_card);
              }}
            >
              <PortfolioCard
                key={index}
                cardnumber={index}
                animation_delay={index * 100}
                cardtitle={selected_card.cardtitle}
                mainpicture={selected_card.mainpicture}
                description={selected_card.description}
                software={selected_card.software}
                softwareicon={selected_card.softwareicon}
              />
            </a>
          ))}
        </section>
      </div>
      {popupToggle && (
        <PopupWrapper>
          <div className="popup_behind" onClick={closePopup}>
            <div className="popup">
              <div className="popup_header">
                <RxCross2 onClick={closePopup} />
              </div>
              <div className="popup_contents">
                {popupContent.map((popup) => {
                  const matchingPopup = Popups.find(
                    (p) => p.cardtitle === popup.cardtitle
                  );
                  return (
                    <div key={popup.cardtitle}>
                      {matchingPopup
                        ? matchingPopup.content
                        : "Content not found"}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </PopupWrapper>
      )}
    </PortfolioWrapper>
  );
};

export default Portfolio;

const PortfolioWrapper = styled.div`


  .header {
    font-size: 4em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
  }

  .Portfolio_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 360px);
    justify-content: space-around;
    gap: 1rem;
    margin-top: 2.3rem;
    margin-left: 3rem;
    margin-right: 3rem;
    z-index: 4;
  }

  .portfolio_btn {
    cursor: pointer;
  }

  @media screen and (max-width: 1600px) {
    .Portfolio_container,
    .header {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .Portfolio_container,
    .header {
      margin-left: 1rem;
      margin-right: 1rem;
      font-size: 3em;
    }
  }

  @media screen and (max-width: 900px) {
    .Portfolio_container,
    .header {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
`;

const MenuChoiceWrapper = styled.div`
  display: flex;
  justify-content: center;

  .choice-type-tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
      0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
  }

  .choice-type-tabs * {
    z-index: 2;
  }

  .choice-type-container input[type="radio"] {
    display: none;
  }

  .choice-type-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 0 15px; /* Added padding to increase width based on text */
    font-size: 0.8rem;
    color: black;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in, background-color 0.25s ease-out;
    background-color: transparent;
    margin: 0 10px; /* Added margin to increase padding between labels */
    border: none; /* Removed border */
  }

  .choice-type-tab.active {
    color: var(--overlay-colour);
    text-shadow: 0 0 10px var(--overlay-colour);
  }
`;
