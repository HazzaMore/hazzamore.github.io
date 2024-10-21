import "../../App.css";
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";

const CV = () => {
  const { menuactive } = useContext(MenuContext);

  return (
    <CVWrapper menuactive={menuactive}>
      <div className="default_container">
        <div className="background TransformRight" />
        <div className="title_button TransformRight" data-aos="fade">
          <h1>CV</h1>
          <a
            href="..\Documents\HarryMooreCV2024.pdf"
            download="HarryMooreCV"
            className="cv_download_btn"
          >
            <i className="fa fa-download"></i> Download PDF
          </a>
        </div>
        <div className = "cv_word TransformRight" data-aos="fade-right" data-aos-delay="1000">
        <iframe src="https://onedrive.live.com/embed?resid=F4950084C69CA914%21112784&amp;authkey=%21ALOJgvTMVs_-6J0&amp;em=2&amp;wdEmbedCode=0&amp;wdStartOn=1">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      </div>
      </div>
    </CVWrapper>
  );
};

export default CV;

const CVWrapper = styled.div<{ menuactive: boolean }>`
  .TransformRight {
    transform: translateX(${(props) => (props.menuactive ? `300px` : "0")});
    transition: 0.3s ease;
  }

  .title_button {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin: 3rem 0 2rem 0;
  }

  .cv_download_btn {
    position: absolute;
    right: 0;
    top: 0;
    // transform: translateY(80%);
    background: #fff;
    padding: 10px 30px;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: var(--BlackGrey-colour);
    border-radius: 12px;
    transition: var(--default-transition);
  }

  .cv_download_btn:hover {
  background-color: var(--website_blue);
  }

  h1 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
    @media screen and (max-width: 1600px) {
      font-size: 4em;
    }
  }
  
.cv_word {
  height: 2000px;
  margin-top: 3rem;
}

.cv_word iframe {
  width:100%;
  height:100%;
}
`;
