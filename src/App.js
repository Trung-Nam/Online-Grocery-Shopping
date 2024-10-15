import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { LocationProvider } from './Context/LocationContext';
import Shop from './Pages/Shop/Shop';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/Product/ProductDetails/ProductDetails';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/shop" exact={true} element={<Shop />} />
          <Route path="/product/:id" exact={true} element={<ProductDetails />} />
          <Route path="/blog" exact={true} element={<Blog />} />
          <Route path="/contact" exact={true} element={<Contact />} />
        </Routes>
      </LocationProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
