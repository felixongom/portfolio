import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
function SocialIcons() {
  return (
    <div className="social_iconFloater" >
    <div className="socialIcons">
      <div className="icons_Wrapper">
        <a href="https://facebook.com">
          <FiFacebook className="facebook" />
        </a>
        <a href="http://linkdin.com">
          <FiLinkedin className="linkedin" />
        </a>
        <a href="mailto:felixongom@2018@gamil.com">
          <BsEnvelope className="email" />
        </a>
      </div>
    </div>
    </div>
  );
}

export default SocialIcons;
