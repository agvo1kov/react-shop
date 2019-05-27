import React from 'react';
import './App.css';
import Catalog from './Catalog';
import Header from './Header';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from "./store/reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <header className="App-header">
                <div className="logo">Webstore</div>
                <Header />
            </header>
            <Catalog />
        </Provider>
    </div>
  );
}

export default App;
