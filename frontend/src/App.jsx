import { Routes, Route } from 'react-router-dom';
import './css/App.css';

import Home from './pages/Home';
import Favorite from './pages/favorites';
import Navbar from './Components/navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
