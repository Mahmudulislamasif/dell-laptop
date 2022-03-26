import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Laptop.css'
const Laptop = ({laptop,addInfoToBox}) => {
    const {id,name,image,price}=laptop;
    return (
        <div className='col-md-4'>
             <div className='shadow-lg p-3 laptop-info'>
             <img className='w-50' src={image} alt=''/>
             <div>
             <h5>Name: {name}</h5>
             <h6>Price:{price}</h6>
             <button className='btn-class' onClick={()=>addInfoToBox(laptop)}>
                 <div className='d-flex'>
                 <p>Add to cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </div>
             </button>
             </div>
             </div>
        </div>
    );
};

export default Laptop;