import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { introText } from "../constants";

const Intro = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const textElements = gsap.utils.toArray('.text');

        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 80%',
                    end: 'center 20%',
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <section id="intro">
        <div className="intro__inner">
          <h2 className="intro__title">
            <div className="container">
              {introText.map((intro, key) => (
                <h1 className="text" key={key}>
                  {intro.title}
                  <span><a href={intro.a} target="_blank">{intro.sp}</a></span>
                </h1>
              ))}
            </div>
          </h2>
        </div>
      </section>
    )
}

export default Intro;
