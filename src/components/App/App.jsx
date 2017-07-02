import React, { PureComponent } from 'react';
import './styles.css';
import Chat from '../Chat';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h2>Hutoma Test</h2>
        </div>
        <div className="app__chat">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
