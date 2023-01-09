import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Cart from './components/Cart';
import './App.scss';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Cart />
        <Articles />
      </CartProvider>
    </div>
  );
}

export default App;
