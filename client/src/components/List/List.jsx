import React from 'react'
import "./List.scss";
import Card from '../Card/Card.jsx';



const List = () => {
  
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",           
            title: "Hat",
            oldPrice:19,
            newPrice:10,
        },
        {
            id:12,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hat",
            oldPrice:19,
            newPrice:10,
            isNew:1
        },
        {
            id:14,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hat",
            oldPrice:19,
            newPrice:10,
        },
        
    ];


  return (
    <div className="list">
        {data.map((item) => <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List