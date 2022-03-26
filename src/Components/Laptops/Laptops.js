import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'
const Laptops = () => {
    const [laptops,setLaptops]=useState([]);
    const [addInfo,setInfo]=useState([]);
    const [random,setRandom]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setLaptops(data))
    },[])
    const addInfoToBox=(product)=>{
          const newCart=[...addInfo,product]
          const randomCart=Math.random(newCart.name)
          setInfo(newCart)
          chooseRandom(randomCart)
    }
    const deleteItems=()=>
    {
      setInfo([])
    }
    const chooseRandom=(randomCart)=>
    {
        console.log(randomCart)
    }
   
   
    return (
        <div className='container content-class'>
           <div className='row g-4'>
            {
                laptops.map(laptop=><Laptop addInfoToBox={addInfoToBox} key={laptop.id} laptop={laptop}></Laptop>)
            }
           </div>
           <div className='section-container'>
          <div className='section-details'>
            {
                addInfo.map((items)=><Cart key={items.id} items={items}></Cart>)
            }
          </div>
          <div>

              <h6>Select Items</h6>
              <button onClick={()=>deleteItems()}>Delete Items</button>
              <button onClick={()=>chooseRandom()}>Delete Items</button>
          </div>
        </div>
        </div>
       
    );
};

export default Laptops;