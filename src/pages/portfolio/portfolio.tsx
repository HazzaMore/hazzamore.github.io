import "../../App.css";
import { useContext, useState } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";
// import AnniversaryBookDetails from "./popups";
import { CardList } from "./card-list";

const Portfolio = () => {
  const { menuactive } = useContext(MenuContext);
  const MenuHeaders = ["All", "Code", "Creative"];
  const [menuChoice, setMenuChoice] = useState<string>(MenuHeaders[0]);

  return (
    <PortfolioWrapper menuactive={menuactive}>
      <div className="portfolio" id="blur">
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
          <CardList filter={menuChoice} />
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
    .Portfolio_container, h1 {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .Portfolio_container {
      grid-template-columns: repeat(2, 1fr);
    }
    .Portfolio_container, h1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .Portfolio_container {
      grid-template-columns: repeat(1, 1fr);
    }
    .Portfolio_container, h1 {
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
