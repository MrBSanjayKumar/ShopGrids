import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from './Components/Head';
import Home from '../src/Components/Home';
import Contact from './Components/Contact';
import About from '../src/Components/About';
import SigninPage from './Components/SigninPage';
import CartPage from './Components/CartPage'
import Product from './Components/Product'

function App() {
  return (
    <>
    <BrowserRouter>
      <Head/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/SigninPage' element={<SigninPage/>} />
        <Route path='/CartPage' element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
