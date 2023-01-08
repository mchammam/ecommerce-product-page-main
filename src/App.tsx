import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import './App.scss';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Articles />
      </CartProvider>
    </div>
  );
}

export default App;
