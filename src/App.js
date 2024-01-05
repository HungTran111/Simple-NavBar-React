import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;
const Download = () => <div>Download Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='left-navbar'>
            <img className='logo' src='https://i.pinimg.com/originals/56/a8/eb/56a8eb675c61296f95a5d65d71f57ae4.png' alt=''/>
            <h3 className='name'>Hung Tran</h3>
          </div>

          <h1 className='nav-link-container'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            <Link to='/download' className='nav-link'>Download</Link>
          </h1>

          <div className='app-loginContainer'>
            <button className='button-signUp'>
              Sign up
            </button>
            <button className='button-logIn'>
              Log In
            </button>
          </div>

        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/download' element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
