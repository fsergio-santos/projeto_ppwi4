import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
 * {
      margin: 0%;
      padding: 0%;
      box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #FFF;
 }
 
 html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
 } 

 *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', Verdana, Tahoma, sans-serif;

 }

 aside, header, main, nav, section {
    display: block;
 }
  

 .app-breadcrumb {
    margin-top: 10px;
    margin-bottom: 0;
    text-align: right;
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    padding: 0;
    text-align: left;
    padding: 0;
    background-color: transparent;
}

@media (max-width: 480px) {
  .app-breadcrumb {
    margin-top: 10px;
  }
}

@media (max-width: 767px) {
  .app {
    overflow-x: hidden;
  }
}

.btn-block {
  display: block;
  width: 100%;
}


.ellipsis {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}

`