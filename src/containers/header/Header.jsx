import React from "react";
import "./header.css";
import people from "./../../assets/people.png";
import ai from "./../../assets/ai.png";
const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="headar-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing.Not
          thoughts all exercise blessing. Indulgence way everything joy
          alternation boisterous the attachment. Party we years joy alteration
          boisterous the attachment. Party we years to order allow asked of.{" "}
        </p>
        <div className="headerinput">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="peoplerimages">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours </p>
        </div>
      </div>
        <div className="aiImage">
          <img src={ai} alt="AI Image" />
        </div>
    </div>
  );
};

export default Header;
