import CenterSection from "./components.jsx/centersection"
import LeftSection from "./components.jsx/leftsection"
import Navbar from "./components.jsx/navbar"
import RightSection from "./components.jsx/rightsection"
import "./App.css"

function App() {
  

  return (
    <>
    <Navbar/>
      <section className="page">
            <div className="l_section"> <LeftSection /></div>

            <div  className="c_section"
            >  <CenterSection/></div>
            
            <div  className="r_section">  <RightSection/></div>
            
      </section>
      
    </>
  )
}

export default App
