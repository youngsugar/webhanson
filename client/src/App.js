import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './Layout/Home/Footer';
import Head from './Layout/Home/Head';
import { RouterConfig } from './Navigation/RouterConfig';
function App() {
  return (
    <div className="App">
       <Router>
          <Head/>
            {/* <Mhead/> */}
            <RouterConfig/>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
