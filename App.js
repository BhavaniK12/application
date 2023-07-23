import React, { useEffect, useState } from 'react'
import '../src/components/Header.css';
import Header from './Header';
import Product from './components/product/Product';
import CartList from './components/product/CartList';


export default function App() {
  const [data,setData]=useState([]);
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
//console.log(cart)
const onClick =(data)=>{
 
 setCart([...cart,{...data,quantity:1}]);
  
  console.log(data);
}

const handleShow=(value)=>{
  setShowCart(value);
}

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`).then(
      response=>response.json()
    ).then(json=>setData(json))
   console.log(data);
  },[])


  return (<>
    <div className='App'>
   <Header count={cart.length} handleShow={handleShow} />

   {
    showCart? <CartList cart={cart}></CartList>:<Product data={data} onClick={onClick}></Product>

   }
  
  
   </div>
    </>
  )
}