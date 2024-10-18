import "../../App.css";
import styled from "styled-components"
import { BookPhoto } from "../../components/images/PortfolioImages/portfolioimages";


const AnniversaryBookDetails = (props: { cardnumber: number; }) => {
  return (
    <PopupWrapper>
      <div id={`popup${props.cardnumber}`} className="popup_container">
        <div className="popup_contents">
          <i className="fa-solid fa-x popup-close"></i>
          <h2 className="popup-title">Book Design</h2>
          <img src={BookPhoto}/> 
          <ul className="popup-contents">
            <li className="popup-list_item">
              Coordinated with 96 people from 19 different countries to leave a message to be added to the book. 
              Discord was used as the main form of communication, with google forms used to collecting images and personalised messages.
            </li>
            <li className="popup-list_item">Designed to dimensions set by the distributer</li>
            <li className="popup-list_item">Designed 64 uniquely designed pages for showcasing artwork, community pictures, year by year highlights etc.</li>
            <li className="popup-list_item">A further 56 pages were designed with community messages, 2 to a page in the design of a postcard.</li>
            <li className="popup-list_item">To see an interactive preview of the book, an example of some of the pages can be seen with the link below:</li>
            <a href="../webpages/book.html">See a preview (TBC)</a>
          </ul>
        </div>
        </div>

    </PopupWrapper>
  )


{/* const AnniversaryBookPopup = () => {
  return (
    <PopupWrapper>
      <>

      </>
    </PopupWrapper>
  ) */}
}


export default AnniversaryBookDetails;

const PopupWrapper = styled.div`

  .popup-title {
    text-align: center;
    font-size: 2.2rem;
  }

  .popup-contents {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .popup-list_item {
    text-align: initial;
    list-style: square;
  }

  .popup-list_item::marker {
    color: var(--website_blue)
  }

  @media screen and (max-width: 900px) {
  .popup{
    width: 90%;
  /* Ensure the scrollbar is visible */
  }
  .popup::-webkit-scrollbar {width: 8px; /* Width of the scrollbar */}
  .popup::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3); /* Color of the scrollbar thumb */
    border-radius: 10px; /* Round edges */}
  .popup::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Color of the scrollbar track */}
  .popup-contents {
    margin-left: 1.5rem;
    margin-right: 0rem;
  }
}`