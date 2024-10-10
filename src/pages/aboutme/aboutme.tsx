import "../../App.css"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MenuContext } from "../../App";

import { AppCodeExperience } from "../../components/common/app-code-experience";

const AboutMe = () => {

  const { menuActive } = useContext(MenuContext);

  return (
    
    <AboutmeWrapper menuActive={menuActive}>
      <div className="background TransformLeft"/>

      <AppCodeExperience />
      <div></div>
    </AboutmeWrapper>
    
  )
}

export default AboutMe;

const AboutmeWrapper = styled.div<{ menuActive: boolean }>`
  .TransformLeft {
    transform: translateX(${ props => props.menuActive ? '-300px' : '0'});
    transition: 0.3s ease;
  }
`