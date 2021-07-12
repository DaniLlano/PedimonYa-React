import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Section from './components/section/Section';
import Orders from './components/orders/Orders';
import Footer from './components/footer/Footer';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {

  return (
    <div>
    <GlobalStyles />
    <Navbar />
    <Section />
    <About />
    <Products/>
    <Orders />
    <Footer />
    </div>
  );
}

export default App;
