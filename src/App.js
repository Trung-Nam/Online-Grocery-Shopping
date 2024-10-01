import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { LocationProvider } from './Context/LocationContext';

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
