import React, { useEffect, useState } from 'react';

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
            setInfo(newCart)
    }
    const deleteItems=()=>
    {
      setInfo([])
    }
   
    const randomItem=(items)=>
    {
        const randoIndex=Math.floor(Math.random()*items.length)
        const selectArray=items[randoIndex]
        setRandom(selectArray)
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
                addInfo.slice(0,4).map((items)=><h5 key={items.id}>{items.name}</h5>)
            }
          </div>
          <div className='btn-cart'>
              <button onClick={()=>deleteItems()} className='btn-one'>Delete Items</button>
              <h6>Select Item:{random.name}</h6>
              <button onClick={()=>randomItem(addInfo)} className='btn-one'>Choose Item</button>
          </div>
        </div>
        </div>
       
    );
};

export default Laptops;