import "../../App.css";
import styled from "styled-components";

interface PortfolioCardProps {
  cardnumber: number;
  animation_delay: number;
  cardtitle: string;
  mainpicture: string;
  software: string;
  softwareicon: string;
}

export const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <PortfolioCardWrapper>
      <article
        className="card"
        data-aos="fade-right"
        data-aos-anchor="portfolio"
        data-aos-delay={props.animation_delay}
      >
        <a className="portfolio_btn">
          <img className="portfolio_img" src={props.mainpicture} />
          <div className="software">
            <h2>{props.software}</h2>
            <i className="software-icon">
              <img src={props.softwareicon} />
            </i>
          </div>
        </a>
      </article>
    </PortfolioCardWrapper>
  );
};

export default PortfolioCard;

export const PortfolioCardWrapper = styled.div`
  // Additional Variables
  --card-border-radius: 12px;

  .card {
    position: relative;
    overflow: hidden;
    display: inline-block;
    background: rgba(128, 128, 134, 0.4);
    border-radius: var(--card-border-radius);
    border: 2px solid transparent;
    box-shadow: var(--default-shadow);
    transition: all 0.5s ease;
    width: 100%; /* Ensure the card takes the full width of its container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    margin: 10px 0; /* Add margin to space out the cards */
  }

  .software {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .card img {
    object-fit: cover;
    aspect-ratio: 1.6;
    max-height: 200px;
    width: 100%;
    height: 100%;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .card i img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 0px;
    object-fit: contain;
  }

  .portfolio_img {
    object-fit: fill;
    transition: transform 0.5s ease-in-out;
  }

  .card:hover {
    box-shadow: 0 0 2px var(--website_blue), 0 0 5px var(--website_blue),
      0 0 5px var(--website_blue), 0 0 20px var(--website_blue),
      0 0 20px var(--website_blue);
}

  .card:before, card:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    background: red;
    filter: blur(60px);
    opacity: 0.4;
    transition: 1.5s;
  }

  .card:before{
    width: 90px;
    background: rgba(225,225,225,0.6);
    transform: translateX(-230px) skewX(-30deg);
  }
  .card:after{
    width: 60px;
    background: rgba(225,225,225,0.6);
    transform: translateX(-230px) skewX(-30deg);
  }

  .card:hover:before, card:hover:after {
  opacity: 0.6;
  transform: translateX(520px) skewX(-30deg);
  }

  .portfolio_btn {
    cursor: pointer;
  }

  .card .software,
  .card h3 {
    /* top, R, bottom, L */
    padding: 0 20px 20px 20px;
  }

  .card h2 {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    color: #dedede;
  }

  .card h3 {
    position: relative;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.4;
    color: #dedede;
  }

  @media screen and (max-width: 900px) {
    .popup {
      width: 90%;
      /* Ensure the scrollbar is visible */
    }
  }
`;
