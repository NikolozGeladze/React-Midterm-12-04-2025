import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import products from './data.js';

function App() {
  const [cart, setCart] = useState([]);
  const [quantityRemoved, setQuantityRemoved] = useState(false)
  
  function addToCart(product, quantity) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: quantity }
          : item
      );
      setQuantityRemoved(false)
      setCart(updatedCart);
    } else {
      setQuantityRemoved(false)
      setCart([...cart, { ...product, quantity: quantity }]);
    }
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setQuantityRemoved(true)
    setCart(updatedCart);
  }

  function clearCart() {
    setQuantityRemoved(true)
    setCart([]);
  }

  return (
    <>
      <div className="overlay"></div>
      <Navbar cart={cart} removeItem={removeItem} clearCart={clearCart} />
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeItem={removeItem}
            quantityRemoved={quantityRemoved}
          />
        ))}
      </div>
    </>
  );
}

export default App;
