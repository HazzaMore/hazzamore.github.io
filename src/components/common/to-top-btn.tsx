import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

import { useEffect } from 'react';

const ToTopBtn = () => {

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const mybutton = document.getElementById("ToTopWrapper");

    const scrollFunction = () => {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        if (mybutton) {
          mybutton.style.display = "block";
          }
        } else if (mybutton) {
            mybutton.style.display = "none";
        }
      } 

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);
  

  return (
    <ToTopWrapper>
      <button className="Btn" onClick={topFunction}>
        <div className="sign">
          <FaArrowUp />
        </div>
      <div className="text">To Top</div>
      </button>
    </ToTopWrapper>
  )
}

export default ToTopBtn;

const ToTopWrapper = styled.div`
.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: grey;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 18px;
  scale: 1.3;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: 0.3s;
  white-space: nowrap;
}
/* hover effect on button width */
.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: 0.3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: 0.3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: 0.3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px, 2px);
}
`