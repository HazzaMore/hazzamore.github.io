import "../../App.css";
import styled from "styled-components";
import {
  BookPhoto,
  MoreLoserfruitBestVideos,
} from "../../components/images/PortfolioImages/portfolioimages";


export const Popups = [
  {
    cardtitle: "Loserfruit Anniversary Book 2024",
    content: (
      <>
        <h2 className="popup-title">Book Design</h2>
        <img className="popup-img" src={BookPhoto} />
        <ul className="popup-contents">
          <li className="popup-list_item">
            Coordinated with 96 people from 19 different countries to leave a
            message to be added to the book. Discord was used as the main form
            of communication, with google forms used to collecting images and
            personalised messages.
          </li>
          <li className="popup-list_item">
            Designed to dimensions set by the distributer
          </li>
          <li className="popup-list_item">
            Designed 64 uniquely designed pages for showcasing artwork,
            community pictures, year by year highlights etc.
          </li>
          <li className="popup-list_item">
            A further 56 pages were designed with community messages, 2 to a
            page in the design of a postcard.
          </li>
          <li className="popup-list_item">
            To see an interactive preview of the book, an example of some of the
            pages can be seen with the link below:
          </li>
          <a href="../webpages/book.html">See a preview (TBC)</a>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "MoreLoserfruit Channel Editing",
    content: (
      <>
        <h2 className="popup-title">MoreLoserfruit Channel Editing</h2>
        <img className="popup-img" src={MoreLoserfruitBestVideos} />
        <ul className="popup-contents">
          <li className="popup-list_item">
            Loserfruit is an Australian Streamer and Youtuber, with combined
            socials ammassing to over 10 million followers
          </li>
          <li className="popup-list_item">
            She reached out in May 2023 with the opportunity to edit videos for
            her second channel 'Loserfruit2.0'. By November 2023, she wanted to
            start a bigger project of playing variety gamemodes within Fortnite
            called 'MoreLoserfruit'. I switched to editing there instead, with
            some of my videos there amassing to almost a million views!
          </li>
          <li className="popup-list_item">
            I edited a total of 23 videos for her 'Loserfruit2.0' channel and 12
            videos for her 'MoreLoserfruit' Channel
          </li>
          <li className="popup-list_item">
            I took a break from doing further editing in light of my risk of
            redundancy in July 2024, in order to focus on my career more
          </li>
          <iframe
            className="popup-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eRfF9-sE0J4?si=yHmiJoaBRSEDU22H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <a href="https://www.youtube.com/@MoreLoserfruit" target="_blank">
            Open MoreLoserfruit YouTube Channel
          </a>
          <a
            href="https://youtube.com/playlist?list=PLnXQgsz0U-RLPiWX5zfnoipBWQDqODBeI&si=e3w1rXSOOr0UBDF-"
            target="_blank"
          >
            Every video edited including for other content creators
          </a>
        </ul>
      </>
    ),
  },
];

export const PopupWrapper = styled.div`

  .popup {
    position: fixed;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    z-index: 2000;
    background-color: #fff;
    border-bottom: 6px solid var(--website_blue);
    // overflow: auto;
    // color: black;
    // transition: opacity 0.5s ease, visibility 0s 0.5s;
    // -webkit-transition: opacity 0.5s ease;
    overflow-y: auto; /* Allow scrolling if content exceeds max-height */
  }

  .popup_container {
    display: inline-block;
    font-size: 1em;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: var(--BlackGrey-colour);
    letter-spacing: 2px;
    transition: var(--default-transition);
  }

  .popup_header {
    position: fixed;
    right: 30px;
    top: 30px;
    scale: 1.5;
    cursor: pointer;
  }

  .popup_header:hover {
  }

  .popup-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .popup-iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .popup-title {
    text-align: center;
    font-size: 2.2rem;
    margin-top: 5%;
  }

  .popup-contents {
    margin-left: 3rem;
    margin-right: 3rem;
    text-transform: none;
  }

  .popup-list_item {
    text-align: initial;
    list-style: square;
  }

  .popup-list_item::marker {
    color: var(--website_blue);
  }

  @media screen and (max-width: 900px) {
    .popup {
      width: 90%;
      /* Ensure the scrollbar is visible */
    }
    .popup::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }
    .popup::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3); /* Color of the scrollbar thumb */
      border-radius: 10px; /* Round edges */
    }
    .popup::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Color of the scrollbar track */
    }
    .popup-contents {
      margin-left: 1.5rem;
      margin-right: 0rem;
    }
  }
`;
