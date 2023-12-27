import { useState } from "react";
import AppWrap from "../Components/AppWrap";
import { WorkData } from "../utils";
import { FaLink, FaGithubAlt } from "react-icons/fa";

function Works() {
  const [works, setWorks] = useState(WorkData)
  const [tagState, setTagState] = useState('all')
  const tags = [...new Set( WorkData.map((work) => work.tag))];


  const filterWorks = (tag)=>{
    if(tag==='all'){
      setTagState('all')
      setWorks(WorkData)
      return
    } 
    let filtered = WorkData.filter(work=>(work.tag===tag ||work.description.includes(tag)) && work)
    setTagState(tag)
    setWorks(filtered)
  }

  return (
    <div id="Works" className="MainContainer">
      <div className="works">
        <h1>
          my creative <span> portfolio </span> section
        </h1>
        <div className="workHeading">
          <span className={tagState ==='all' && 'tagbg'} onClick={() => filterWorks('all')}>all</span>
          {tags?.map((tag, i) => (
            <span key={tag+i} className={tagState===tag && 'tagbg'} onClick={() => filterWorks(tag)}>{tag}</span>
          ))}
        </div>
        <div className="worksContent">
          {works.map((work,i) => (
            <div key={i}
               className="wrapper">
              <div className="imagediv">
                <img src={work.img} alt="" />
                <h2>{work.tag}</h2>
              </div>
              <h2 className="name">{work.name}</h2>
              <p className="description">{work.description}</p>
              <div className="worksLinksContainer">
                <a href="https//github">
                  <FaGithubAlt />
                </a>
                <a href="https//link">
                  <FaLink />
                </a>
              </div>
            </div >
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Works, "gray");
