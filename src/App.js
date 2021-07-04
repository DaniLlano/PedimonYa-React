
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Section from './components/section/Section';
import Cart from './components/cart/Cart';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {

  return (
    <div>
    <GlobalStyles />
    <Navbar />
    <Section />
    <About />
    <Products/>
    <Cart />
    </div>
  );
}

export default App;
