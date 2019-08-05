import React from 'react';
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from './lib';

const ResetCSS = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const localLoginController = {}
const extractLoginController = (loginController) => {
  localLoginController.controller = loginController;
}

const App = () => (
  <React.Fragment>
    <ResetCSS/>
    <ThemeProvider theme={{mode: 'light', defaultContrast: 'linear-gradient(45deg, #F05A28 0%, #A3317A 100%)'}}>
      <Login appearance='default' title="Faça Login" buttonText="Logar" frontOnSubtleLinkClick={()=>console.log("hehehe")} frontOnSubmit={(data)=>{console.log(data)}} getLoginController={extractLoginController}/>
    </ThemeProvider>
  </React.Fragment>
);

const changeToBackFaceAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.setBackFace();
    changeToFrontFaceAfter3Seconds()
  }, 3000);
}
const changeToFrontFaceAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.setFrontFace();
    resetFrontAfter3Seconds()
  }, 3000);
}

const resetFrontAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.clearFrontFaceInput()
    resetBackAfter3Seconds()
  }, 3000);
}

const resetBackAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.clearBackFaceInput()
    toggleFrontFaceButtonLoadingAfter3Seconds()
  }, 3000);
}

const toggleFrontFaceButtonLoadingAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.toggleFrontFaceButtonLoading()
    toggleFrontBackButtonLoadingAfter3Seconds()
  }, 3000);
}
const toggleFrontBackButtonLoadingAfter3Seconds = () => {
  setTimeout(function () {
    localLoginController.controller.toggleBackFaceButtonLoading()
  }, 3000);
}
// changeToBackFaceAfter3Seconds()

render(<App />, document.getElementById("root"));
