import AppWrap from "../Components/AppWrap"
import  {FaEnvelope} from 'react-icons/fa'
import  {FiPhoneCall} from 'react-icons/fi'
import SendButton from "../Components/SendButton"

function Contact() {

  return (
    <div id='Contact' className='MainContainer'>
      <div className="conyactContaine">
        <h1>take a <span>coffee</span> & <span>chat with me</span></h1>
        <div className="contactForm">
          <div className="contactMethod">
            <div className="email">
              <FaEnvelope className="icon"/> 
              <span>felixongom2018@gmail.com</span>
            </div>
            <div className="phone">
              <FiPhoneCall className="icon"/> 
              <span>+256 785 009 090</span>
            </div>
          </div>

          <form className="Form">
            <input placeholder="Your Name"/>
            <input placeholder="Your email"/>
            <textarea placeholder="Your Messege" />
            <SendButton loading={false} title={'send'}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Contact,'white')