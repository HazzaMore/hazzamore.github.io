import "../../App.css";
import { useContext } from "react";
import { MenuContext } from "../../App";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { menuactive } = useContext(MenuContext);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f610b773-10cf-49cd-9b98-55f523268db1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast("Email sent successfully");
    }
  };

  return (
    <ContactWrapper menuactive={menuactive}>
      <ToastContainer />
      <div className="default_container">
        <div className="background TransformRight" />
        <section className="info_form_container TransformRight">
          <div className="y_align_container" data-aos="fade-right">
            <div>
              <div className="text">
                <h1>
                  Contact<span> Me</span>
                </h1>
              </div>
              <div className="contact-text">
                <p>
                  I'm eager to meet new people and discover opportunities for
                  collaboration. Whether you're interested in my work, have
                  project ideas, or simply want to chat, I'd be delighted to
                  hear from you! Feel free to contact me via email or through my
                  social media profiles. Your messages matter, and I aim to
                  reply promptly. I look forward to connecting with you and
                  discussing potential collaborations!
                </p>
                <p style={{ color: "#00eeff" }}>
                  <strong>Harry.Moore.MEng@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="y_align_container">
            <div className="contact-form" data-aos="fade-left">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your Subject"
                  required
                />
                <textarea
                  name="message"
                  cols={40}
                  rows={10}
                  placeholder="Enter your messege"
                  required
                ></textarea>
                <input type="submit" name="Submit Form" className="send_btn" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div<{ menuactive: boolean }>`
  .TransformRight {
    transform: translateX(${(props) => (props.menuactive ? `300px` : "0")});
    transition: 0.3s ease;
  }

  .info_form_container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 6rem;
    margin: 3rem 0 2rem 0;
  }

  .y_align_container {
    display: flex;
    align-items: center; /* Vertically centers the content */
  }

  h1 {
    font-size: 4em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
    transition: var(--default-transition);
    @media screen and (max-width: 1600px) {
      font-size: 3em;
    }
  }
  .text h1 span {
    color: var(--website_blue);
  }

  p {
    color: white;
    padding: 2rem 1rem 0 0;
  }

  .contact_leftside p,
  .contact_leftside h2 {
    margin-top: 3rem;
  }

  .contact-list {
    margin-top: 3rem;
  }

  .contact-form form {
    position: relative;
  }
  .contact-form form input,
  form textarea {
    border: none;
    outline: none;
    width: 100%;
    padding: 18px;
    background: #555557;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
  }
  .contact-form form .send_btn {
    display: inline-block;
    background: var(--website_blue);
    padding: 14px 60px;
    border-radius: 40px;
    font-size: 18px;
    color: #081b29;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    animation: slideTop 1s ease forwards;
    animation-delay: 2s;
    box-shadow: 0 0 5px var(--website_blue), 0 0 25px var(--website_blue);
    cursor: pointer;
  }
  .contact-form textarea {
    resize: none;
    height: 220px;
  }
  .contact-form form .send_btn:hover {
    background-color: var(--website_blue);
    color: #081b29;
    box-shadow: 0 0 5px var(--website_blue), 0 0 25px var(--website_blue),
      0 0 50px var(--website_blue), 0 0 50px var(--website_blue),
      0 0 100px var(--website_blue);
  }

  @media screen and (max-width: 900px) {
    .contactme {
      padding: 40px;
    }
    .info_form_container {
      display: block;
      margin-top: 4rem;
    }
    .contact-form {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
  }
`;
