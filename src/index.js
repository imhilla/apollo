import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import Rates from './Rates';
import Dogs from './Dogs';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>My first Apollo app 🚀</h2>
        {/* <Rates /> */}
        <Dogs />
      </div>
    </ApolloProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
