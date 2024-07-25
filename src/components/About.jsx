import React from 'react'
import { aboutText } from "../constants";

import user from "../assets/img/user.svg";
import cakeBirthday from "../assets/img/cakeBirthday.svg";
import home from "../assets/img/home.svg";
import envelope from "../assets/img/envelope.svg";
import phoneCall from "../assets/img/phoneCall.svg"
import seolhwa from "../assets/img/seolhwa.jpg";

const About = () => {
  return (
    <section id="about">
        <div className="about__inner">
        <div className="about__title">
            About me
        </div>
            <div className="aboutme_rect">
                <div className="rectIn">
                    <div className="profile">
                        <img src={seolhwa}/>
                    </div>
                    <ul>
                        {aboutText.map((about, key) => (
                            <li key={key}>
                                <img  src={require(`../assets/img/${about.img}.svg`)} alt={about.title} />{about.title}
                            </li>
                        ))}
                    </ul>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default About