import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.scss';

class App extends React.Component{
  render(){
    return (
      <div> This is inside the App component FOLDER. <span styleName="sasstest">SASS TEST</span> </div>
    );
  }
}

export default CSSModules(App, styles);