import "../../App.css";
import styled from "styled-components";
import {
  BookPhoto,
  MoreLoserfruitBestVideos,
  Emotes,
  OtherBadges,
  LivBevanVideos,
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
            src="https://www.youtube.com/embed/eRfF9-sE0J4?si=yHmiJoaBRSEDU22H"
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
  {
    cardtitle: "Loserfruit Twitch channel emotes and badges",
    content: (
      <>
        <h2 className="popup-title">Loserfruit Twitch channel:</h2>
        <img className="popup-img" src={Emotes} />
        <img className="popup-img" src={OtherBadges} />
        <ul className="popup-contents">
          <li className="popup-list_item">
            Emotes are used on her Twitch Channel as a perk of being a paid
            member, with holiday themed variants during those occasions
          </li>
          <li className="popup-list_item">
            Badges are the images next to usernames when a paid member has kept
            their subscription going for a given number of months or years
          </li>
          <li className="popup-list_item">
            The Fruit Box PVP artwork was created as an icon reprosenting an
            ability within the custom fortnite creative game 'FruitBox PVP'
          </li>
          <li className="popup-list_item">
            All artworks were created with different layers within photoshop,
            using a graphic tablet
          </li>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "Work for Unique Team Building, Australia",
    content: (
      <>
        <h2 className="popup-title">Work for Unique Team Building</h2>
        <ul className="popup-contents">
          <li className="popup-list_item">
            Information about this project TBC
          </li>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "TikTok Reaction for Liv Bevan",
    content: (
      <>
        <h2 className="popup-title">Tiktok reaction video for Liv Bevan</h2>
        <img className="popup-img" src={LivBevanVideos} />
        <ul className="popup-contents">
          <li className="popup-list_item">
            Liv Bevan is another popular content creator known best for their
            YouTube videos and relation to 'The Boys', an australian irl content
            driven YouTube channel.
          </li>
          <li className="popup-list_item">
            I edited a few highly edited videos for them for tiktok reaction
            based content.
          </li>
          <iframe
            className="popup-iframe"
            src="https://www.youtube.com/embed/2ArHOrZ1JcI?si=pOt2Zcfg16rmUyzO"
          ></iframe>
          <a href="https://www.youtube.com/@bivlev" target="_blank">
            Open Liv Bevan YouTube Channel
          </a>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "Website Design",
    content: (
      <>
        <h2 className="popup-title">Website Design</h2>
        <ul className="popup-contents">
          <li className="popup-list_item">
            Information about this project TBC
          </li>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "Raspberry Pi 5 Projects",
    content: (
      <>
        <h2 className="popup-title">Raspberry Pi Project</h2>
        <ul className="popup-contents">
          <li className="popup-list_item">
            Information about this project TBC
          </li>
        </ul>
      </>
    ),
  },
  {
    cardtitle: "Automation Projects",
    content: (
      <>
        <h2 className="popup-title">Automation Project</h2>
        <ul className="popup-contents">
          <li className="popup-list_item">
            Information about this project TBC
          </li>
        </ul>
      </>
    ),
  },
];

export const PopupWrapper = styled.div`
  .popup_behind {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1999;
    transition: var(--default-transition);
  }
  .popup_behind {
    backdrop-filter: blur(5px);
    transition: var(--default-transition);
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    z-index: 2000;
    background-color: #fff;
    border-radius: 10px;
    transition: opacity 0.5s ease, visibility 0s 0.5s;
    -webkit-transition: opacity 0.5s ease;
    overflow-y: auto; /* Allow scrolling if content exceeds max-height */
  }

  .popup_contents {
    display: inline-block;
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    transition: var(--default-transition);
  }

  .popup_header {
    position: fixed;
    right: 30px;
    top: 30px;
    scale: 1.5;
    cursor: pointer;
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
    width: 560px;
    height: 315px;
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

  .popup_contents a {
    display: flex;
    justify-content: center;
    background: #e8e8e8;
    margin-top: 30px;
    padding: 10px;
    color: var(--BlackGrey-colour);
  }
  
  .popup_contents a:hover {
    background-color: var(--website_blue);
    transition: var(--default-transition);
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
