import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src="https://avatars.githubusercontent.com/u/124887084?v=4" alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Devansh Tyagi</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project was created all the pokemon fans, myself included.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Devansht420">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/devansh-tyagi-/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);