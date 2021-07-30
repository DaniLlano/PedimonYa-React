import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Checkout exact path="/checkout"/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
