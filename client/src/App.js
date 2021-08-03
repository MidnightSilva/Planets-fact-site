import './Scss/App.scss';
import "./Scss/Nav.scss"
import "./Scss/Variables.scss"
import "./Scss/button.scss";
import Nav from './Layout/Nav'
import Mercury from './Pages/Mercury';
import Venus from './Pages/Venus'
import Earth from './Pages/Earth'
import Mars from './Pages/Mars'
import Jupiter from './Pages/Jupiter'
import Saturn from './Pages/Saturn'
import Uranus from './Pages/Uranus'
import Neptune from './Pages/Neptune'
// import Planet from './Pages/Planet';
import AppContextProvider from "./Context/AppContext";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <AppContextProvider>
      <Router>
        <Nav />
        <Switch>
          {/* <Route exact path="/:planet" component={Planet}/> */}
          <Route exact path="/" component={Mercury} />
          <Route exact path="/Venus" component={Venus} />

          <Route exact path="/earth" component={Earth} />

          <Route exact path="/mars" component={Mars} />

          <Route exact path="/jupiter" component={Jupiter} />

          <Route exact path="/saturn" component={Saturn} />

          <Route exact path="/uranus" component={Uranus} />

          <Route exact path="/neptune" component={Neptune} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
