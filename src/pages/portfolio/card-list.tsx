import PortfolioCard from "./card-layout";
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

export const CardList = ({ filter }: CardListProps) => {
  const cards = [
    {
      cardtitle: "Loserfruit Anniversary Book 2024",
      mainpicture: AnniversaryBook,
      software: "InDesign",
      softwareicon: indesign_icon,
      type: "Creative",
    },
    {
      cardtitle: "MoreLoserfruit Channel Editing",
      mainpicture: MoreLoserfruit,
      software: "Premiere Pro",
      softwareicon: adobe_premiere_pro_icon,
      type: "Creative",
    },
    {
      cardtitle: "Loserfruit Twitch channel emotes and badges",
      mainpicture: EmoteArtworkPreview,
      software: "Photoshop",
      softwareicon: adobe_photoshop_icon,
      type: "Creative",
    },
    {
      cardtitle: "Work for Unique Team Building, Australia",
      mainpicture: BlenderWork,
      software: "Blender",
      softwareicon: blender_icon,
      type: "Creative",
    },
    {
      cardtitle: "TikTok Reaction for Liv Bevan",
      mainpicture: LivBevanWork,
      software: "Premiere Pro",
      softwareicon: adobe_premiere_pro_icon,
      type: "Creative",
    },
    {
      cardtitle: "Website Design",
      mainpicture: WebsitePreview,
      software: "Html & Css",
      softwareicon: html_icon,
      type: "Code",
    },
    {
      cardtitle: "Raspberry Pi 5 Projects",
      mainpicture: Pi5,
      software: "Ubuntu",
      softwareicon: ubuntu_icon,
      type: "Code",
    },
    {
      cardtitle: "Automation Projects",
      mainpicture: CodeAutomation,
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
          software={card.software}
          softwareicon={card.softwareicon}
        />
      ))}
    </>
  );
};
