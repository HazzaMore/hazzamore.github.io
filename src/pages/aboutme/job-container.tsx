import styled from "styled-components";
import "../../App.css";
import React from "react";

interface JobContainerProps {
  year: string;
  company: string;
  role: string;
  media: { src: string };
  content: React.ReactNode;
}

const JobContainer = (props: JobContainerProps) => {
  return (
    <JobWrapper>
      <div className="JobHeader" id="JobHeader" data-aos="fade">
        <div className="text">
          <h2>{props.year}</h2>
          <h3>{props.company}</h3>
          <h3>{props.role}</h3>
        </div>
      </div>
      <div className="media_banner">
        {props.media.src.endsWith(".mp4") ? (
          <video
            className="fullwidth"
            src={props.media.src}
            playsInline
            muted
            loop
            autoPlay
          />
        ) : props.media.src.endsWith(".jpg") ||
          props.media.src.endsWith(".png") ? (
          <img className="fullwidth" src={props.media.src} />
        ) : (
          <p>Unsupported media type</p>
        )}
      </div>
      <div className="job-section fullwidth">
        <div className="job-container">{props.content}</div>
      </div>
    </JobWrapper>
  );
};

export default JobContainer;

const JobWrapper = styled.div`
  .JobHeader {
    /* background: #f1f1f1; */
    opacity: 1;
    padding: 250px 0 30px 0;
    text-align: left;
    z-index: 3;
  }

  .media_banner {
    margin-left: -50px;
    position: relative;
    z-index: 3;
  }

  .fullwidth {
    top: 0;
    left: 0;
    width: 100vw;
  }

  .job-section {
    background-color: #f5f5f5;
    padding: 20px 0;
    margin-left: -50px;
  }

  .job-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px; /* Space between logo-text-blocks */
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .text {
    vertical-align: middle;
    z-index: 10;
    transition: var(--default-transition);
    padding-top: 8rem;
  }

  h2,
  h3 {
    margin-top: 0em !important;
    line-height: 1em !important;
  }

`;
