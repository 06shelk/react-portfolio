import React, { useEffect, useRef  } from 'react';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectText } from "../constants";
import { portText } from "../constants";

const Project = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const horizontal = horizontalRef.current;
      const sections = sectionsRef.current;
  
      let scrollTween = gsap.to(sections, {
          xPercent: -150 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
          trigger: horizontal,
          start: "top 56px",
          end: () => "+=" + horizontal.offsetWidth,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          },
      });
  
      return () => {
          scrollTween.kill();
      };
  }, []);

  return (
      <section id="project" ref={horizontalRef}>
      <div className="project__inner">
          <div className="project__title">
              project
          </div>
          <div className="project__wrap">
              {projectText.map((project, key) => (
                  <article 
                      className={`project__item p${key + 1}`} 
                      key={key} 
                      ref={(el) => (sectionsRef.current[key] = el)
                  }>  
                      <div className="project_left">
                        <div className='images'>
                            <a href={project.code} target="_blank" className="img" rel="noreferrer">
                                <img src={project.img} alt={project.name} />
                            </a>
                        </div>
                        <div className='texts'>
                            <p className='desc'>person : {project.person}</p>
                            <p className="desc">skill : {project.tech}</p>
                            <p className="desc">period : {project.period}</p>
                        </div>
                      </div>
                      <div className="project_right">
                        <div className='texts'>
                            <h3 className="title">{project.title}</h3>
                            <p className="desc">{project.desc}</p>

                            <div className='text2'>
                            {project.work && <p>function : {project.work}</p>}
                            {project.myWork && <p>myWork : {project.myWork}</p>}
                            </div>
                        </div>
                        <div className='github'>
                            <a href={project.view} target="_blank" className="site" rel="noreferrer">github 보러가기</a>    
                        </div>
                      </div>



                  </article>
              ))}
          </div>
      </div>
  </section>

  );
};

export default Project;
