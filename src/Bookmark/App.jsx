
import Hero from './Component/Hero'
import NavBar from './Component/NavBar'
import NavBarModal from './Component/NavBarModal'
import Features from './Component/Features'
import SubLinks from './Component/SubLinks'
import Extensions from './Component/Extensions'
import Accordion from './Component/Accordion'
import SubFooter from './Component/SubFooter'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div >
      <NavBar />
      <NavBarModal />
      <Hero />
      <Features/>
      <SubLinks/>
      <Extensions/>
      <Accordion/>
      <SubFooter/>
      <Footer/>
    </div>
  )
}

export default App
