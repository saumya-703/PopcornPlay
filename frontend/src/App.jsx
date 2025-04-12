import { Routes, Route } from 'react-router-dom';
import './css/App.css'
import Favorites from "./pages/favourites"
import Home from "./pages/Home"
import Navbar from './Components/navbar';

function App() {//Name of the Component

  return (
    //To add two similar component these <> </>
    <>
    <div>
      <Navbar />
    </div>
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
    </>
  );
}


export default App
