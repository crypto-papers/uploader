import * as React from 'react';
import * as ReactDom from 'react-dom';

import Header from './components/Header/Header';

import './app.css';

const App: React.FC = () => (
  <div className="test">
    <Header />
  </div>
);

App.displayName = 'App';

ReactDom.render(<App />, document.getElementById('uploader-root'));

export default App;
