import AppWrap from "../Components/AppWrap";
import { skillsData } from "../utils";
import { motion } from "framer-motion";
import { expirience } from "../utils";

function SkillsAndExpoirience() {

  return (
    <div id="Skills" className="MainContainer">
      <div className="skillsInnerContainer">
        <h1>
          my <span>skills</span>and <span>expirience</span>
        </h1>
        <div className="innnerContaier">
          <div className="skills">
            {skillsData.map((skill, i) => (
              <motion.div 
                whileInView={{
                  scale:[0, 1]
                }}
                key={i} className="content ">
                <div className={`skillIcon ${skill.skill}`}>{skill.logo}</div>
                <h3 className="title">{skill.skill}</h3>
              </motion.div>
            ))}
          </div>
          <div className="expirience">
            {expirience?.map((exp, i) => (
              <motion.div 
              key={i}
              whileInView={{
                scale:[0, 1]
              }} 
              className="single_expirience">
                <h3 className="year">{exp.year}</h3>
                <div className="expirienceBodyContainer">
                  {
                    exp.jobs.map((job,i)=>(
                    <div key={i} className="expirienceBody">
                      <h2>{job.title}</h2>
                      <p>{job.company}</p>
                      <div className="description">{job?.description}</div>
                    </div>
                    ))
                  }
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(SkillsAndExpoirience, "bg-red-500, pt-20 flex");
