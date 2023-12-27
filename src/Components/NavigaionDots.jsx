import { useStateContext } from "../context";
import { navList } from "../utils";
function NavigaionDots() {
  const { active, setActive } = useStateContext();
  return (
    <div className="social_iconFloater dotsFloater" >
    <div className="socialIcons">
      <div className="icons_Wrapper navSideDots">
        {navList.map((nav, i) => (
          <a
            onClick={() => setActive(nav)}
            className={`${active === nav && "active-dot"}`}
            href={`#${nav}`}
            key={nav + i}
          >.</a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default NavigaionDots;
