import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Section from './components/section/Section';
import Orders from './components/orders/Orders'
import { GlobalStyles } from './styles/GlobalStyles';
import { useCart } from './hooks/useCart'

function App() {
  const shoppingCart = useCart()

  return (
    <div>
    <GlobalStyles />
    <Navbar />
    <Section />
    <About />
    <Products {...shoppingCart}/>
    <Orders />
    </div>
  );
}

export default App;
