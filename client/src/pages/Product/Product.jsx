import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";



const Product = () => {
  const [selectedImage, setSelectedImage] =useState(0); 
  const [quantity,setQuantity] =useState(1);

  const images=[ 
    "https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7083929/pexels-photo-7083929.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7990748/pexels-photo-7990748.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]




  return (
   <div className="product">
    <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=> setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e)=> setSelectedImage(1)}/>
          <img src={images[2]} alt="" onClick={(e)=> setSelectedImage(2)}/>
        </div>
        <div className="mainImg">
        <img src={images[selectedImage]} alt="" />
        </div>
    </div>
    <div className="right">
        <h1>Title</h1>
        <span className='price'>$180</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="quantity">
           <button onClick={()=> setQuantity(prev=>prev===1?1:prev-1)}>-</button>
           <span>{quantity}</span>
           <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
              <div className="item">
               <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
         </div>
         <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
         </div>
            <hr />
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
    </div>
    
   </div>
  )
}

export default Product