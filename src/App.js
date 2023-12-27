import './scss/index.scss'
import Hero from './container/Hero'
import MainLayout from './Components/MainLayout'
import SkillsAndExpoirience from './container/SkillsAndExpoirience'
import About from './container/About'
import Works from './container/Works'
import Testimonials from './container/Testimonials'
import Contacts from './container/Contacts'
function App() {
  return <>
  <MainLayout>
    <Hero/>
    <About/>
    <Works/>
    <SkillsAndExpoirience/>
    <Testimonials/>
    <Contacts/>
  </MainLayout>
  </>
}

export default App