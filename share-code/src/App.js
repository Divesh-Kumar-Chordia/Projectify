import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import logo from './images/logoBlack.png';
import Login from './Login';
import Register from './Register';
import HomeNew from "./HomeNew";


function App() {
  return (
    <div className="App">
      <NavBar/>

      <BrowserRouter>
        <Routes>
          <Route path="/:uniqueCode" element={<HomeNew/>}/>
          <Route path="/" element={<Home/>}/>
            </Routes>
      </BrowserRouter>


      <HomeNew/>
      <Footer/>
    </div>
  );
}

export default App;
