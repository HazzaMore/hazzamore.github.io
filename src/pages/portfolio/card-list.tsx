// import PortfolioCard from "./card-layout";
import PortfolioCard from "./card-layout-v2";
import {
  adobe_photoshop_icon,
  adobe_premiere_pro_icon,
  blender_icon,
  html_icon,
  indesign_icon,
  python_icon,
  ubuntu_icon,
} from "../../components/images/Logos/logoimages";
import {
  AnniversaryBook,
  BlenderWork,
  CodeAutomation,
  EmoteArtworkPreview,
  LivBevanWork,
  MoreLoserfruit,
  Pi5,
  WebsitePreview,
} from "../../components/images/PortfolioImages/portfolioimages";

interface CardListProps {
  filter: string;
}

const CardList = ({ filter }: CardListProps) => {
  const cards = [
    {
      cardtitle: "Loserfruit Anniversary Book 2024",
      mainpicture: AnniversaryBook,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "InDesign",
      softwareicon: indesign_icon,
      type: "Creative",
    },
    {
      cardtitle: "MoreLoserfruit Channel Editing",
      mainpicture: MoreLoserfruit,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Premiere Pro",
      softwareicon: adobe_premiere_pro_icon,
      type: "Creative",
    },
    {
      cardtitle: "Loserfruit Twitch channel emotes and badges",
      mainpicture: EmoteArtworkPreview,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Photoshop",
      softwareicon: adobe_photoshop_icon,
      type: "Creative",
    },
    {
      cardtitle: "Work for Unique Team Building, Australia",
      mainpicture: BlenderWork,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Blender",
      softwareicon: blender_icon,
      type: "Creative",
    },
    {
      cardtitle: "TikTok Reaction for Liv Bevan",
      mainpicture: LivBevanWork,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Premiere Pro",
      softwareicon: adobe_premiere_pro_icon,
      type: "Creative",
    },
    {
      cardtitle: "Website Design",
      mainpicture: WebsitePreview,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Html & Css",
      softwareicon: html_icon,
      type: "Code",
    },
    {
      cardtitle: "Raspberry Pi 5 Projects",
      mainpicture: Pi5,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Ubuntu",
      softwareicon: ubuntu_icon,
      type: "Code",
    },
    {
      cardtitle: "Automation Projects",
      mainpicture: CodeAutomation,
      description:"lorem ipsum, dolor sit amet consectetur adipisicing elit. Et velmaxime ut odio veniam sed ab laborum modi nulla qui!", 
      software: "Python",
      softwareicon: python_icon,
      type: "Code",
    },
  ];

  const filteredCards = filter === "All" ? cards : cards.filter(card => card.type === filter);

  return (
    <>
      {filteredCards.map((card, index) => (
        <PortfolioCard
          key={index}
          cardnumber={index + 1}
          animation_delay={1000 + index * 200}
          cardtitle={card.cardtitle}
          mainpicture={card.mainpicture}
          description={card.description}
          software={card.software}
          softwareicon={card.softwareicon}     
          />
      ))}
    </>
  );
};
