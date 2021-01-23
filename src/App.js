import './App.css';
import 'uikit/dist/js/uikit'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import CovidGlobalState from './context/covidglobal/CovidGlobalState';
import CovidDaily from "./components/pages/CovidDaily";
import CovidStats from "./components/pages/CovidStats";
import NotFound from "./components/error/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Charts from "./components/pages/Charts";
import ScrollRestoration from "./scrollrestore/ScrollRestoration";

function App() {
  return (
    <CovidGlobalState>
      <Router>
        <Navbar />
        <ScrollRestoration />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/covid-daily" component={CovidDaily} />
          <Route exact path="/" component={CovidStats} />
          <Route exact path="/chart/:country" component={Charts} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </CovidGlobalState>
  );
}

export default App;
