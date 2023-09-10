import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './Header';
import ShopingProduct from './ShopingProduct';
import ProductDetails from './ProductDetails';
import ShopCart from './ShopCart';
import Footer from './Footer';
// Context
import ApiProvider from '../Context/ApiContext';
import CartContextProvider from '../Context/CartContext';
// Form
import Signup from "./Form/Signup"
import Login from './Form/Login';
// Styles
import styles from "../Styles/Store.module.css"


const Store = () => {
  return ( 
    <ApiProvider>
    <CartContextProvider>
      <div className={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={ <ShopingProduct /> }/>
        <Route path='/details' element={ <ProductDetails /> }/>
        <Route path='/details/:id' element={ <ProductDetails /> }/>
        <Route path='/cart' element={ <ShopCart /> }/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={ <ShopingProduct /> }/>
      </Routes>
      <Footer />
      </div>
      </CartContextProvider>
    </ApiProvider>
   )
}
 
export default Store;
