import { navList } from '../utils'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { useStateContext } from '../context'
function Navbar() {
  const {active,setActive,openNavBar,setOpenNavBar}=useStateContext()

  return (
    <>
    <div className='navBar'>
      <a onClick={()=>setActive('Hero')} className='Name' href= {`#Hero`}>Felix</a>
      <div className="navBar_right-container">
        <ul>
          {navList.map((nav, i)=>(
            
            <li
            onClick={()=>setActive(nav)} key={nav+i}>
              <a className={`${active===nav && 'bolder'}`} href={`#${nav}`}>{nav}</a>
              {<div className={`${active===nav && 'showinfo'}`}/>}
            </li>
          ))}
        </ul>
      </div>
      <div onClick={()=>setOpenNavBar(true)} className="menue_wrapper">
        <FiMenu className='menuIcon'/>
      </div>
    </div>
    <div className={`medium_navBar ${openNavBar && 'medium_navBar_open'} `}>
        <ul>
          {navList.map((nav, i)=>( 
            <li
              onClick={()=>{
              setActive(nav)
              setOpenNavBar(false)
            }
              } key={nav+i}>
              <a className={`${active===nav && 'bolder'}`} href={`#${nav}`}>{nav}</a>
              {<div className={`${active===nav && 'showinfo'}`}/>}
            </li>
          ))}
        <CgClose onClick={()=>setOpenNavBar(false)} className='closeNavbarIcon'/>
        </ul>
    </div>
    </>
  )
}

export default Navbar