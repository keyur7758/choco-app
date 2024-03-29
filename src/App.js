import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Cart from './features/cart/Cart';
import ProductPage from './components/productPage/ProductPage';

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="productpage" element={<ProductPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
