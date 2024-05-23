import React, { useEffect } from 'react';
import useStore from './context/Store';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

function App() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="App">
        <Navbar/>
        <Main/>
      <div className="cards-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.images[0]} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
