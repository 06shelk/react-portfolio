import React, { useRef, useEffect } from 'react';

import { skillText } from "../constants";

const Skill = () => {
  // let observer = new IntersectionObserver(() => {})
  // observer.observe()
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const skillTitle = target.dataset.skillTitle; 
          const skill = skillText.find(skill => skill.title === skillTitle); 
          if (skill) {
            target.style.width = skill.per; 
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);


    document.querySelectorAll('.skill').forEach(skill => {
      observerRef.current.observe(skill);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [skillText]); 


  return (
    <section id='skill'>
       <div className="skill__inner">
          <h2 className="skill__title">skill</h2>
          
          <div className="container">
          {skillText.map((skill, key) => (
            <ul key={key}>
              <p>{skill.title}</p>
              <li className={`skill-container ${skill.title}`}>
                <div
                  className={`skill ${skill.title}`}
                  data-skill-title={skill.title} 
                  style={{ width: '0%', transition: 'width 2s ease' }} 
                >
                  {skill.per}
                </div>
              </li>
            </ul>
           ))}
          </div> 

       </div>
    </section>
  )
}

export default Skill