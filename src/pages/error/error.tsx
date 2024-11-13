import "../../App.css"
import styled from "styled-components";


const Errorpage = () => {

  return (
    
    <ErrorWrapper >
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

  const ErrorWrapper = styled.div`

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