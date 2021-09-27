import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
//import { Header } from './components/header'
//import { Features } from './components/features'
//import { About } from './components/about'
// import { Services } from './components/services'
// import { Gallery } from './components/gallery'
// import { Testimonials } from './components/testimonials'
import { Join } from './components/join'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Switch, Route } from 'react-router-dom'
import Confirm from './Confim'
import Privacy from './Privacy'
import Loader from "./components/loader";
import mainContext from './components/mainContext'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const  [loadingState, setLoadingState] = useState(false)
  //setLoadingState(false);
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  if (loadingState) { return (<Loader />)}

  return (
    <mainContext.Provider value={{loadingState, setLoadingState}}>
    <div>
      
      <Navigation />

      <Switch>
        <Route exact path='/' component={Join} data={landingPageData.Join}/>
        <Route exact path='/confirm' component={Confirm}/>
        <Route exact path='/privacy' component={Privacy}/>
      </Switch>
      <Footer />
      
    </div>
    </mainContext.Provider>
  )
}

export default App
