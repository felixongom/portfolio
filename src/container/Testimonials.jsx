import { useState } from "react";
import AppWrap from "../Components/AppWrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TestimonialsData } from "../utils";

function Testimonials() {
  const [index, setIndex] = useState(0);
  //
  const moveLeft = () => {
    setIndex(index === 0 ? TestimonialsData.length - 1 : index - 1);
  };
  //
  const moveRight = () => {
    setIndex(index === TestimonialsData.length - 1 ? 0 : index + 1);
  };
  let data = TestimonialsData[index];

  return (
    <div id="Testimonials" className="MainContainer">
      <div className="innerTestimonialContainer">
        <h3>
          helpfull <span>testimonials</span> section
        </h3>
        <div className="textimaonialContent">
            <div               
            className="contentCard">
              <img src={data.img} alt="avatar" />
              <div className="detailsContainer">
                <p>{data.body}</p>
                <div>
                  <h2>{data.name}</h2>
                  <h5>{data.company}</h5>
                </div>
              </div>
            </div>
          
          <div className="control">
            <div onClick={moveLeft}>
              <BiChevronLeft />
            </div>
            <div onClick={moveRight}>
              <BiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Testimonials, "gray");
