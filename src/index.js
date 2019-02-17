import React from 'react';
import { render } from "react-dom";

import Login from './lib';

const localLoginController = {}
const extractLoginController = (loginController) => {
  localLoginController.controller = loginController;
  console.log(localLoginController);
}

const App = () => (
  <React.Fragment>
    <Login title="Faça Login" buttonText="Logar" frontOnSubmit={(data)=>{console.log(data)}} getLoginController={extractLoginController}/>
  </React.Fragment>
);

const changeToBackFaceAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.setBackFace();
    changeToFrontFaceAfter3Seconds()
  }, 5000);
}
const changeToFrontFaceAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.setFrontFace();
  }, 5000);
}

changeToBackFaceAfter3Seconds()

render(<App />, document.getElementById("root"));
