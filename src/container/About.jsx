import AppWrap from "../Components/AppWrap" 
import { AboutData } from "../utils"
import { motion } from "framer-motion"

function About() {

  return (
    <div id='About' className='MainContainer'>
      <div className="aboutInner_container">
        <h1>it's true that <span>good design</span>
        make <span>good business</span></h1>
      <div className="aboutInnerContents">
       {AboutData.map((about, i)=>(
        <motion.div 
          className="aboutInnerContent"
          whileInView={{
            opacity:[0, 1]  
          }}         
          >
          <img src={about.img} alt="" />
          <h2>{about.name}</h2>
          <p className="description">{about.description}</p>
        </motion.div>
       ))}
      </div>
      </div>
    </div>
  )
}

export default AppWrap(About,'white')