import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import {useState,useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const [cart,setCart]=useState({});
  const [subTotal,setSubTotal]=useState(0);
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(cart);
    for(let i = 0;i<keys.length;i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }
  useEffect(()=>{
    console.log("I am useEffect")
    try {
      if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
    }else{

    } 
    } catch (error) {
      console.error(error)
      localStorage.clear();
    }
    
   
  },[])
  const addtoCart = (itemCode,qty,price,name,size,variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode]={qty:1,price,name,size,variant};
    }
    setCart(newCart);
    saveCart(newCart)
  }
  const removeFromCart = (itemCode,qty,price,name,size,variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart)
  }
  const clearCart =()=>{
    setCart({});
    saveCart({})
    console.log("Card cleared")
  }
  return <>
    <NavBar key={subTotal}  cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
   <Component cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
   <Footer/>

   </>
}

export default MyApp
