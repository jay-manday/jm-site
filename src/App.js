import React from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Home from 'Containers/Home'

export default () => (
  <Router>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>

  </Router>
)

injectGlobal`
  body {
    background-color: black;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }


  canvas {
    position: relative;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
  }

  .YoutubeContainer-wrapper {
    position: relative;
    padding-bottom: 56.25%;
  }

  .linkz {
    text-decoration: underline;
    text-decoration-color:  #0000ff;
    transition: #ff0000 .15s ease-in;
  }

  .linkz:hover {
    color: #ff0000;
  }

  .linkz:visited {
    color: #ffffff;
    text-decoration-color:  #0000ff;
  }

  .YoutubeContainer-wrapper iframe,
  .YoutubeContainer-wrapper object,
  .YoutubeContainer-wrapper embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: 'GrotesqueMT';
    src: url('../public/fonts/GrotesqueMT.eot'); /* IE9 Compat Modes */
    src: url('../public/fonts/GrotesqueMT.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../public/fonts/GrotesqueMT.woff') format('woff'), /* Modern Browsers */
       url('../public/fonts/GrotesqueMT.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../public/fonts/GrotesqueMT.svg#GrotesqueMT') format('svg'); /* Legacy iOS */
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'GrotesqueMT-Italic';
    src: url('../public/fonts/GrotesqueMT-Italic.eot'); /* IE9 Compat Modes */
    src: url('../public/fonts/GrotesqueMT-Italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('../public/fonts/GrotesqueMT-Italic.woff') format('woff'), /* Modern Browsers */
      url('../public/fonts/GrotesqueMT-Italic.ttf') format('truetype'), /* Safari, Android, iOS */
      url('../public/fonts/GrotesqueMT-Italic.svg#GrotesqueMT-Italic') format('svg'); /* Legacy iOS */
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
`
