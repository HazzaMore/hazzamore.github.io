import "../../App.css"
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";


const Errorpage = () => {

  const { menuactive} = useContext(MenuContext);

  return (
    
    <ErrorWrapper menuactive={menuactive}>
      <div className="background TransformRight"/>
      <section className="text TransformRight" data-aos="fade">
        <h1>
          Error 404
          <br/>
          Sorry the page you are looking for does not exist
        </h1>
      </section>

    </ErrorWrapper>
  )
}

export default Errorpage;

  const ErrorWrapper = styled.div<{ menuactive: boolean}>`

  .TransformRight {
    transform: translateX(${ props => props.menuactive ? `300px` : '0'});
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