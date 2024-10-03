import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './view/Home';

const App = () => {
  return (
    <div className='container'>
        <Header/>
        <Home/>
        {/* <Footer/> */}
    </div>
  )
}

export default App;