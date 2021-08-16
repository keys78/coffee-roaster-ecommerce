import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import CreateYourPlan from './CreateYourPlan'


function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create-your-plan">
            <CreateYourPlan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
