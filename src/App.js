import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import CreateYourPlan from './CreateYourPlan'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/createyourplan">
            <CreateYourPlan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
