import React from 'react';
import { render } from "react-dom";

import {LoginFonts} from './lib';
import Login from './lib';

const App = () => (
  <React.Fragment>
    <LoginFonts/>
    <Login title="Faça Login" buttonText="Logar"/>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
