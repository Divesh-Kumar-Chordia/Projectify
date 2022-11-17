import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <Router>
<Routes>
{//useHistory
}
            <Route path={App} element={
            <img src={logo} className="header_logo" alt=''/>
        } />
        <Route path={Login} element={
            <span
            className="header_optionLineOne">
            Login
            </span>
                } />
            <Route path={Register} element={
            <span
            className="header_optionLineTwo">
                Register
        </span>

                } />
            </Routes>
        </Router>

      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
