import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Mobilenav from './Components/Mobilenav';
import Home from './Components/Home';
import Category from './Components/Category';
import Featuresection from './Components/Featuresection';
import Featuresectionx from './Components/Featuresectionx';
import Banner from './Components/Banner';
import Blog from './Components/Blog.jsx';
import News from './Components/News.jsx';
import Feature from './Components/Feature.jsx';
import Footer from './Components/Footer.jsx';
import  CartcontentProvider  from './Content/Cartcontent';
import Cart from './Components/Cart.jsx';


const App = () => {
const [showCart, setShowCart] = useState(false);

  return (
    <CartcontentProvider>
    <main>
      <Navbar setShowCart={setShowCart} />
      <Mobilenav setShowCart={setShowCart} />
      <Home />
      <Category />
      <Featuresection />
      <Featuresectionx />
      <Banner />
      <Blog />
      <News />
      <Feature />
      <Footer />
      {showCart &&  <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartcontentProvider>
  );
};

export default App; 