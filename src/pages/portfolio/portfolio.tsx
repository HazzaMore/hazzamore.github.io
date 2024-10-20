import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";

import { Cards } from "./data";
import { PortfolioCardWrapper } from "./card-layout";
import { Popups, PopupWrapper } from "./popups";

import { RxCross2 } from "react-icons/rx";

const Portfolio = () => {
  const { menuactive } = useContext(MenuContext);
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
    <PortfolioWrapper menuactive={menuactive}>
      <div className="default_container">
        <div className="background TransformRight" />
        <section className="text TransformRight" data-aos="fade">
          <h1>My Portfolio</h1>
        </section>
        <section className="TransformRight">
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
        <section className="Portfolio_container TransformRight" data-aos="fade">
          {FilteredCards.map((selected_card, index) => (
            <PortfolioCardWrapper key={index}>
              <article
                className="card"
                data-aos="fade-right"
                data-aos-anchor="portfolio"
                data-aos-delay={1000 + index * 200}
              >
                <a
                  className="portfolio_btn"
                  onClick={() => {
                    console.log(selected_card);
                    openPopup(selected_card);
                  }}
                >
                  <img
                    className="portfolio_img"
                    src={selected_card.mainpicture}
                  />
                  <div className="software">
                    <h2>{selected_card.software}</h2>
                    <i className="software-icon">
                      <img src={selected_card.softwareicon} />
                    </i>
                  </div>
                  <div>
                    <h3>{selected_card.cardtitle}</h3>
                  </div>
                </a>
              </article>
            </PortfolioCardWrapper>
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

const PortfolioWrapper = styled.div<{ menuactive: boolean }>`

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
    margin-bottom: 2rem;
  }

  .Portfolio_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
    align-items: center;
    gap: 2.3rem;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    z-index: 4;
  }

  @media screen and (max-width: 1600px) {
    .Portfolio_container {
      grid-template-columns: repeat(3, 1fr);
    }
    .Portfolio_container,
    h1 {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .Portfolio_container {
      grid-template-columns: repeat(2, 1fr);
    }
    .Portfolio_container,
    h1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .Portfolio_container {
      grid-template-columns: repeat(1, 1fr);
    }
    .Portfolio_container,
    h1 {
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
