import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { PATHS } from './routePaths';

import LandingPage from './views/LandingPage/LandingPage';
import AboutPage from './views/AboutPage/AboutPage';

import PublicFooter from './components/PublicFooter/PublicFooter';
import LandingAnimation from './components/LandingAnimation/LandingAnimation';
import DesignList from './views/DesignList/DesignList';
import DesignDetail from './views/DesignList/DesignDetails/DesignDetail'

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Routes>
            <Route exact path={PATHS.HOME_PATH} element={<LandingPage />} />
            <Route exact path={PATHS.DESIGN_LIST_PATH} element={<DesignList />} />
            <Route exact path={PATHS.DESIGN_DETAIL_PATH} element={<DesignDetail />} />
            <Route exact path={PATHS.ABOUT_PATH} element={<AboutPage />} /> 
          </Routes>
        </div>
      </Router>
    );
  }
}

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      <div>
        <div className="App__wrapper">
          <Component {...props} />
        </div>
      </div>
    );
  }
}/>);

function App() {
  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
