import React, { Component } from 'react';
import './App.scss'
import { Navigation, Intro, Textbox, Background} from './components'

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div>
        <Navigation/>
        <Intro/>
      </div>
    );
  }
}

export default App;