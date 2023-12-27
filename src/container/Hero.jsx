import AppWrap from "../Components/AppWrap";
import heroImage from "../images/heroImage.png";
import { FaAndroid, FaSass, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {

  return (
    <div id="Hero" className="MainContainer">
      <div className="innerContainer">
        <div className="helloMessege">
          <span>hi 🖐</span>
          <motion.div
            whileInView={{opacity:[0, 1]}}
            >
            I just want to inform you that beautiful design makes beautiful work entirely.
          </motion.div>
        </div>
        <div className="heroImage">
          <motion.div
            whileInView={{scale:[0, 1]}}

            >
            <img src={heroImage} alt="img" />
          </motion.div
           
           >
        </div>
        <div className="favSocialIcons">
          <div className="innerDiv">
            <motion.div 
              whileInView={{
                x:[40, -60],
                opacity:[0,1]
              }}
              className="iconWrapper one">
              <FaSass className="herosass"/>
            </motion.div>
            <motion.div 
               whileInView={{
                x:[40,0, 0],
                opacity:[0,1]
              }}
              className="iconWrapper two">
              <FaAndroid className="heroandroid" />
            </motion.div>
            <motion.div 
               whileInView={{
                x:[40,-60],
                opacity:[0,1]
              }}
              className="iconWrapper three">
              <FaReact className="heroreact" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Hero, "gray");
