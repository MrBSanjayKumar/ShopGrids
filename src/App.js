import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from './Components/Head';
import Home from '../src/Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import SigninPage from './Components/SigninPage';
import CartPage from './Components/CartPage'
import Product from './Components/Product'
import WishlistPage from './Components/WishlistPage';
import { CartProvider } from './Components/CartProvider';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import './Loading.css';
import { SearchProvider } from './Components/SearchContext';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      {
        loading ? (<Loading />) : (
          <SearchProvider>
            <BrowserRouter>
              <Head />
              <CartProvider>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Product' element={<Product />} />
                  <Route path='/Contact' element={<Contact />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/SigninPage' element={<SigninPage />} />
                  <Route path='/CartPage' element={<CartPage />} />
                  <Route path='/WishlistPage' element={<WishlistPage />} />
                </Routes>
              </CartProvider>
            </BrowserRouter>
          </SearchProvider>
        )}

    </>
  );
}

export default App;
