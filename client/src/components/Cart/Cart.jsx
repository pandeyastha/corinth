import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",           
            title: "Hat",
            oldPrice:19,
            newPrice:10,
        },
        {id:2,
        img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",           
        title: "Hat",
        oldPrice:19,
        newPrice:10,
    },
    ];

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {
            data?.map((item)=> (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,50)}</p>
                        <div className="price">
                            1 x ${item.newPrice}
                        </div>

                    </div>
                    <DeleteOutlinedIcon classname="delete" color='red'/>
                </div>
            ))}
            <div className="total">
                <span>SubTotal</span>
                <span>$123</span>
            </div>
            <button>Proceed to Checkout</button>
            <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart