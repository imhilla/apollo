import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from '@apollo/client';

import Rates from './Rates'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

// client.query({
//   query: gql`
//   query GetRates {
//     rates(currency: "USD") {
//       currency
//     }
//   }`
// }).then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>My first Apollo app 🚀</h2>
        <Rates />
      </div>
    </ApolloProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
