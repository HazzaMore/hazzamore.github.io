import styled from "styled-components";
import {codingIcons, programIcons} from "../images/Logos/logoimages";


export const AppCodeExperience = () => {
  return (
  <AddCodeExperienceWrapper>
    
    {codingIcons.map((icon, index) => (
      <ul className = "apps_row" key = {index}>
        <img src={icon} alt="" title={icon.split('/').pop().split('.')[0].replace(/-/g, ' ').replace(/icon/i, '').replace(/\b\w/g, (char: string) => char.toUpperCase())} />
      </ul>
      ))}
    <hr style={{ width: '100%', margin: '20px 0' }} />
    {programIcons.map((icon, index) => (
      <ul className="apps_row" key={index}>
        <img src={icon} alt="" title={icon.split('/').pop().split('.')[0].replace(/-/g, ' ').replace(/icon/i, '').replace(/\b\w/g, (char: string) => char.toUpperCase())} />
      </ul>
      ))}
  </AddCodeExperienceWrapper>
      

  )
}

const AddCodeExperienceWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;

.apps_row {
  display: flex;
  align-items: center;
  margin: 10px;
}

img {
  max-width: 100px;
  height: auto;
}
`