import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";



const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <div className="contact__text">
                <div className="text">
                    
                    <a
                     href= "mailto:shlee4349@gmail.com/"
                     rel="noopener noreferrer"
                     target="_blank"
                    ><MdEmail /></a>
                    <a
                     href= "https://seolstudy.tistory.com/"
                     rel="noopener noreferrer"
                     target="_blank"
                    ><FaGithub /></a>
                    <a
                     href= "https://seolstudy.tistory.com/"
                     rel="noopener noreferrer"
                     target="_blank"
                    ><FaBlogger /></a>
                   
                   
                </div>
              </div>     
            </div>
        </section>
    );
};

export default Contact;