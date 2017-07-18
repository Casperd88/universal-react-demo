import React from 'react';
import { Route } from 'react-router-dom';

import {Home} from './Home';
import {Contact} from './Contact';

export const App = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/Contact" component={Contact}/>
  </div>
);
