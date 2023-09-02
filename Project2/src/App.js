

import Home from'./Pages/Home/Home'
import About from './Pages/About/About'
import CoverLetter from './Pages/CoverLetter/Cover'
import Resume from './Pages/Resume/Resume'
import Footer from './Component/Footer/Footer'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {

  return(
  <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route  path="/About"><About/></Route>
      <Route path="/resume"><Resume/></Route>
      <Route path="/cover"><CoverLetter/></Route>
    </Switch>
    <Footer/>
    </Router>
    )
}

export default App;