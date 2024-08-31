import Banner from "./Components/Banner/Banner"
import Blog from "./Components/Blog/Blog"
import Client from "./Components/Client/Client"
import CopyRight from "./Components/Copyright/CopyRight"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Process from "./Components/Process/Process"
import Service from "./Components/Service/Service"
import Who from "./Components/Who/Who"
import Work from "./Components/Work/Work"

function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Who/>
      <Work/>
      <Process/>
      <Client/>
      <Blog/>
      <Footer/>
      <CopyRight/>
    </>
  )
}

export default App
