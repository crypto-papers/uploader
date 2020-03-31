import * as React from 'react';
import * as ReactDom from 'react-dom';

import Layout from './components/Layout/Layout';

const App: React.FC = () => (
  <Layout />
);

App.displayName = 'App';

ReactDom.render(<App />, document.getElementById('uploader-root'));

export default App;
