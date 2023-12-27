import NavigaionDots from "./NavigaionDots";
import SocialIcons from "./SocialIcons";
const AppWrap = (Component, className)=> ()=> {
    return (
        <div className={className} style={{display:'flex'}}>
            <SocialIcons/>
            <Component/>
            <NavigaionDots/> 
        </div>
    )
  };


export default AppWrap;
