import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { transitionTo } from "./PageTransition";
import { TbNotes } from "react-icons/tb";

import HoverLinks from "./HoverLinks";

import Magnetic from "./Magnetic";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <Magnetic>
          <span>
            <a
              href="https://github.com/nullpointerx01"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                transitionTo("https://github.com/nullpointerx01", true);
              }}
            >
              <FaGithub />
            </a>
          </span>
        </Magnetic>
        <Magnetic>
          <span>
            <a
              href="https://in.linkedin.com/in/alok-dwivedi-b387b1326"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                transitionTo("https://in.linkedin.com/in/alok-dwivedi-b387b1326", true);
              }}
            >
              <FaLinkedinIn />
            </a>
          </span>
        </Magnetic>
      </div>
      
      <Magnetic>
        <a 
          className="resume-button" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            transitionTo("#", false); // Add actual PDF link here
          }}
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      </Magnetic>
    </div>
  );
};

export default SocialIcons;
