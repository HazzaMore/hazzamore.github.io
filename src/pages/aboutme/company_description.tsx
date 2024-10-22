import {
  jlr_logo,
  kubrick_logo,
  unique_team_building,
  twofrontteeth,
} from "../../components/images/Logos/logoimages";
import "../../App.css";
import styled from "styled-components";

export const Kubrick_description = () => {
  return (
    <CompanyWrapper>
        <div className="logo-text-block" data-aos="fade">
          <div className="left-column">
            <img src={kubrick_logo} width="600px" className="center" />
            <p className="company_description">
              For the last 2 years, I have been working for Kubrick Group where
              I honed my expertise in numerous software development and cloud
              provisioning projects. During my 3 months of training, I developed
              on my skills across Azure, GCP, and AWS including in:
              <br />
              <br />
              <ul className="bulletlist">
                <li>Scripting Automation</li>
                <li>DevOps Pipelines</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Infrastructure as Code using Terraform</li>
              </ul>
              <br />
              Additionally, I gained handson experience in provisioning
              environments for Python, cluster technology, RDBMS, and NoSQL
              databases. In July, I undertook an extensive 7 day course through
              Kubrick, covering the complete process of provisioning databricks
              in Azure. Developing PR and CI/CD pipelines for managing code
              changes, creating & configuring Databrick workspace environments &
              infrastructure through terraform and setting up CI/CD development
              flow within Databricks workspace with Asset Bundles and Azure
              pipelines.
            </p>
          </div>
          <div className="right-column" data-aos="fade">
            <p className="company_description">
              <strong>
                Cloud Engineer <br />
                Consultant
              </strong>
              <br />
              In training
            </p>
          </div>
        </div>
        <div className="logo-text-block" data-aos="fade">
          <div className="left-column">
            <img src={jlr_logo} width="600px" className="center" />
            <p className="company_description">
              Post training, I placed with Jaguar Land Rover for a year and a
              half, contributing to a team tasked with developing software for
              the certification and homologation process. It was during a big
              period of change at JLR, as they transitioned to companywide cloud
              hosted applications to streamline their workflow and exchange of
              data. Initially this required frequent stakeholder engagement to
              assess inefficiencies in existing processes, aligning them with
              the new software's capabilities & learning what to adapt to match
              their requirements. This process required numerous meetings with
              engineers, learning their processes, developing solutions for it
              to then be presented in both 20 person meetings and department
              wide quarterly progress meetings.
              <br /> The product produced allowed certification engineers to
              list legislations the model of car must follow, so that multiple
              vehicle engineers could provide evidence in the form of text or
              documents for each. All whilst linking data which was most up to
              date and in one centralised database/application. Previously this
              was done through lengthy excel documents and emailing out
              individuals for files. This meant that once all the data was
              collated into the internet form, a one button process would
              convert it into a pdf with the correct formatting ready for
              governing bodies.
              <br /> Upon approaching the first prod deployment, work evolved
              into developing test automation scripts utilising BDP methodology
              and selenium. This required producing python and feature file
              scripts within their test suite, configuring ci-yaml and
              undergoing an extensive merge request process. It was a great
              opportunity to work through from conception to deployment of a
              software development process. All tasks were weighted and ran
              within 2-week sprints following the agile methodology.
            </p>
          </div>
          <div>
            <div className="right-column" data-aos="fade">
              <p className="company_description">
                <strong>Cloud Engineer</strong> <br />
                Software Development <br />
                Stakeholder Engagement <br />
                Software Demos <br />
                Test Automation
              </p>
            </div>
          </div>
        </div>
    </CompanyWrapper>
  );
};

{
  /* <CompanyWrapper>
  <div className="job-container">
    <div className="logo-text-block" data-aos="fade">
      <div className="left-column">
        <img src={} width="600px" className="center" />
        <p className="company_description">
        </p>
      </div>
      <div className="right-column" data-aos="fade">
        <p className="company_description">
        </p>
      </div> 
    </div>
  </div> 
</CompanyWrapper> */
}

export const Unique_Team_Building_description = () => {
  return (
    <CompanyWrapper>
        <div className="logo-text-block" data-aos="fade">
          <div className="left-column">
            <img src={unique_team_building} height="200px" className="center" />
            <p className="company_description">
              <br /> During the COVID-related travel restrictions, I worked
              remotely from the UK to Australia, collaborating directly with the
              company director on researching and designing a prototype camping
              system for the upcoming Tesla Cyber-Truck. This involved extensive
              research into materials, solar panel technology, and tent setup
              mechanisms. Additionally, I taught myself how to use Blender, a 3D
              design application, to create photorealistic renders of the
              concept for investor presentations. Managing the project required
              strong independence and organisational skills due to the time zone
              differences, necessitating careful planning to meet weekly
              deadlines and effectively communicate progress in one-on-one
              Google meetings. The final design of the tent system open is
              restricted under a NDA.
            </p>
          </div>
          <div className="right-column" data-aos="fade">
            <p className="company_description">
              <strong>Project Design Engineer</strong>
              <br />
              Stakeholder Engagement
              <br />
              Blender Design
            </p>
          </div>
        </div>
    </CompanyWrapper>
  );
};

export const Twofrontteeth_description = () => {
  return (
    <CompanyWrapper>
        <div className="logo-text-block" data-aos="fade">
          <div className="left-column">
            <img src={twofrontteeth} height="100px" className="center" />
            <p className="company_description">
              <br /> In my spare time after school, I learnt Adobe Photoshop to
              retouch family photos, preparing them for client viewing and
              managed Facebook ad campaigns. This work demanded precision and
              efficiency, especially when editing numerous photos under strict
              deadlines. Additionally, I'd been assisting with glass cutting and
              constructing handmade frames on weekends. I had to ensure that
              each photo fitted perfectly and remained dust-free, requiring keen
              attention to detail. Balancing these tasks alongside my studies
              had strengthened my organisational and time management abilities,
              allowing me to excel in both my part-time job and academic
              pursuits.
            </p>
          </div>
          <div className="right-column" data-aos="fade">
            <p className="company_description">
              <strong>Photo Editor</strong>
              <br />
              Photoshop
              <br />
              Framing
            </p>
          </div>
        </div>
    </CompanyWrapper>
  );
};

const CompanyWrapper = styled.div`
  .logo-text-block {
    display: grid;
    grid-template-columns: 4fr 1fr; /* Left column for logo and text, right column for paragraph */
    gap: 60px;
    align-items: flex-start; /* Align items to the start of the column */
    padding: 5%;
  }

  .left-column,
  .right-column {
    display: flex;
    flex-direction: column;
  }

  .right-column {
    margin-top: 40%;
  }

  .bulletlist li {
    list-style: circle;
    font-size: 1.4rem;
    margin-left: 1.4rem;
  }

  p.company_description {
    font-size: 1.4em;
    color: black;
  }

  @media screen and (max-width: 900px) {
    .logo-text-block img {
      width: auto;
      height: 80px;
    }
  
    .logo-text-block {
      grid-template-columns: 1fr;
      padding: 50px 50px 0 50px;
    }
    
    .right-column {
      display: none;
      margin-top: 0;
      text-align: center;
    }

    p.company_description {
      font-size: 1.2em;
    }

    .bulletlist li {
      font-size: 1em;
    }
  }
`;
