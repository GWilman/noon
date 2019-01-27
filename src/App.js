import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './utilities/routes';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
library.add(faMapMarker);


const App = () => (
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
);

export default App;
