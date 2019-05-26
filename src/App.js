import React from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="logo">Webstore</div>
            <div className="cart">В корзине </div>
        </header>
        <h3>Выберите товары:</h3>
        <Catalog />
    </div>
  );
}

export default App;
