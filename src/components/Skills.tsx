import { useEffect, useRef, useState } from 'react';
import './Skills.css';

type Skill = { name: string; percentage: number };

const SKILLS: Skill[] = [
  { name: 'HTML/CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'Node.js', percentage: 90 },
  { name: 'Java', percentage: 90 },
  { name: 'TypeScript', percentage: 65 },
];

export default function Skills() {
  // no generic type args
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = skillsRef.current as Element | null;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);     // start animation
          observer.disconnect(); // run once; remove this line if you want replay
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-content">
          <div className="skills-text">
            <h3>Technical Skills</h3>
            <p>
              I have experience with a wide range of technologies and tools. Here are some of my key technical skills:
            </p>
          </div>

          <div className="skills-bars" ref={skillsRef}>
            {SKILLS.map((skill, index) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-info">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: animate ? `${skill.percentage}%` : '0%',
                      transitionDelay: animate ? `${0.2 * index}s` : '0s',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
