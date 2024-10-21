import "../../App.css";
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";
import Checkbox from "./checkbox";

const Upcoming = () => {
  const { menuactive } = useContext(MenuContext);

  return (
    <UpcomingWrapper menuactive={menuactive}>
      <div className="default_container">
        <div className="background TransformRight" />
        <div className="TransformRight">
          <h1>Website Improvements to come</h1>
          <div className="checkbox_container">
            <Checkbox completed={true} content="Add the new upcoming page"/>
            <Checkbox completed={false} content="Add the logo and website title to the tab"/>
            <Checkbox completed={false} content="Add social links to contact me page"/>
            <Checkbox completed={false} content="Link to a firebase database"/>
            <Checkbox completed={false} content="Add the scoll reveal animations"/>
            <Checkbox completed={false} content="Add a 'to top' button"/>
            <Checkbox completed={false} content="Add Loading Animations"/>
            <Checkbox completed={false} content="Add login so owners can update the site"/>
            <Checkbox completed={false} content="Consider improving the CV page design"/>
            <Checkbox completed={false} content="Reduce repeated css and clean up"/>
          </div>
        </div>
      </div>
    </UpcomingWrapper>
  );
};

export default Upcoming;

const UpcomingWrapper = styled.div<{ menuactive: boolean }>`
  .TransformRight {
    transform: translateX(${(props) => (props.menuactive ? `300px` : "0")});
    transition: 0.3s ease;
  }

  h1 {
    font-size: 4em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
    margin: 3rem 0 2rem 0;
    @media screen and (max-width: 1600px) {
      font-size: 3em;
    }
    @media screen and (max-width: 900px) {
      font-size: 2em;
    }
  }

  .checkbox_container {
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 40px;
    // margin-bottom: 5px;
  }

  Checkbox {
    margin-bottom: 5px;}
  `;
