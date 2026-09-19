import './App.css'
import ExperienceList from "./lib/ExperienceList";
import EducationList from './lib/EducationList';
import SkillList from './lib/SkillList';

function About() {

  return (
    <>
      <main>
        <br />
        <br />
        <br />
        <section>
          <div>
            <h1 className="fade-in">About Me</h1>
            <br />
            <h3 className="fade-in-delay">Hi, my name is Abby and I am a full-stack software engineer 
                with 3+ years of experience building impactful, real-world applications. I plan to graduate 
                in December 2026 with an M.S. in Computer Science specializing in Human-Computer Interaction at Georgia Tech.
            </h3>
          </div>
          <br />
          <br />
          <div className="two-column-text fade-in-delay-2">
            <div>
                <h2>My Experience</h2>
                <br />
                <ExperienceList />
            </div>
            <div>
                <h2>My Education</h2>
                <br />
                <EducationList />
                <br />
                <h2>My Skills</h2>
                <br />
                <SkillList />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About;
