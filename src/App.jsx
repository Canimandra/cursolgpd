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

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Join} data={landingPageData.Join}/>
        <Route exact path='/confirm' component={Confirm}/>
        <Route exact path='/privacy' component={Privacy}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
