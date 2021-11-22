import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GetFeedResponse } from './generated/graphql';
import './index.css';
import reportWebVitals from './reportWebVitals';


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getFeed: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing: undefined | GetFeedResponse, incoming: GetFeedResponse) {
            if (existing === undefined) {
              return {
                ...incoming, items: incoming.items.map(item => ({
                  ...item, date: item.date.split("T")[0]
                }))
              }
            }
            else {
              return { ...incoming, items: [...existing.items, ...incoming.items.map(item => ({
                ...item, date: item.date.split("T")[0]
              }))] };
            }

          },
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'https://master-bb-ta-frontend-3tunt6sv4q-ez.a.run.app/graphql',
  // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
