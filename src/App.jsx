import React, { useEffect } from 'react';
import useStore from './context/Store';
import './App.css';

function App() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="cards-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
