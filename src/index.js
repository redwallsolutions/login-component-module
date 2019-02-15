import React from 'react';
import { render } from "react-dom";

import Login from './lib';

const App = () => (
  <React.Fragment>
    <Login title="Faça Login" buttonText="Logar" frontOnSubmit={(data)=>{console.log(data)}}/>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
