import styled from "styled-components";
import {codingIcons, programIcons} from "../images/Logos/logoimages";


export const AppCodeExperience = () => {
  return (
  <AddCodeExperienceWrapper>
    
    {codingIcons.map((icon, index) => (
      <ul className = "apps_row" key = {index}>
        <img src={icon} alt=""/>
      </ul>
      ))}
    <br/>
    {programIcons.map((icon, index) => (
      <ul className = "apps_row" key = {index}>
        <img src={icon} alt=""/>
      </ul>
      ))}
  </AddCodeExperienceWrapper>
      

  )
}

const AddCodeExperienceWrapper = styled.div`
  .apps_row img{
    width: 40px;
    height: 40px;
    align-items: center;
}`