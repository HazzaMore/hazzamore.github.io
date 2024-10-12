import "../../App.css"
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";


const CV = () => {

  const { menuActive} = useContext(MenuContext);

  return (
    
    <CVWrapper menuActive={menuActive}>
      <div className="background TransformRight"/>
      <section className="text TransformRight" data-aos="fade">
        <h1>
          CV
          <br/>
          Sorry this page is under construction
        </h1>
      </section>

    </CVWrapper>
  )
}

export default CV;

  const CVWrapper = styled.div<{ menuActive: boolean}>`

  .TransformRight {
    transform: translateX(${ props => props.menuActive ? `300px` : '0'});
    transition: 0.3s ease;
  }

  h1 {
    font-size: 3em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  .text {
    vertical-align: middle;
    z-index: 10;
    padding-top: 40vh;
    padding-left: 10%;
  }
`;