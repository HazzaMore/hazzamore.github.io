import "../../App.css";
import styled from "styled-components";
import { HollographicCard } from "../../components/images/mainimages";
import { GlareCard } from "../../components/common/glare-card";

interface PortfolioCardProps {
  cardnumber: number;
  animation_delay: number;
  cardtitle: string;
  mainpicture: string;
  description: string;
  software: string;
  softwareicon: string;
}

export const PortfolioCard = (props: PortfolioCardProps) => {
  const cardwidth = "40px";
  return (
    <PortfolioCardWrapper $cardwidth={cardwidth}>
      <GlareCard radius={`${0.3 * parseFloat(cardwidth)}px`} className="card-dimensions">
        <img className="hollograph-background" src={HollographicCard} />
        <div className="card-inside">
          <img className="card-img" src={props.mainpicture} width={"100px"} />
          <div className="card-content">
        <div className="card-title-container">
          <h1 className="card-title">{props.cardtitle}</h1>
        </div>
        <p className="descripton">{props.description}</p>
        <div className="tap-to-open">
          <p> &lt; Tap to open &gt;</p>
        </div>
          </div>
        </div>
        <img className="sofware-icon" src={props.softwareicon} />
        <img
          src={require("../../components/images/Logos/MyLogos/HH_Logo_colour.png")}
          className="circle-img"
        />
      </GlareCard>
    </PortfolioCardWrapper>
  );
};

export default PortfolioCard;

export const PortfolioCardWrapper = styled.div<{ $cardwidth: string }>`
  // Card Variables
  --card-width: ${(props) => props.$cardwidth};

  .card-dimensions {
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: calc(9 * var(--card-width));
    max-height: calc(14 * var(--card-width));
    border-radius: calc(0.3 * var(--card-width));
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .hollograph-background {
    position: absolute;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(0.6) saturate(1.2) contrast(1.2);
  }

  .card-inside {
    display: grid;
    margin: 12px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    overflow: hidden;
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: calc(4.5 * var(--card-width));
  }

  .card-content {
    margin: 15px 15px 0px 15px;
  }

  .card-title-container {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .card-title {
    font-size: 22px;
    line-height: 1;
  }

  .descripton {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
  }

  .tap-to-open {
    display: flex;
    font-size: 13px;
    color: #666;
    margin-bottom: 6px;
    justify-content: center;
  }

  .sofware-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }

  .circle-img {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 6px;
    left: 6px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
