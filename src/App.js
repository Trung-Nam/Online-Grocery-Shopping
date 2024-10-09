import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { LocationProvider } from './Context/LocationContext';
import Shop from './Pages/Shop/Shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/shop" exact={true} element={<Shop />} />
        </Routes>
      </LocationProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
