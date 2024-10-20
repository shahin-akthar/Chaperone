import {Link} from 'react-router-dom'
import CartPopup from '../CartPopup';
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

import './index.css'

const PlantProduct = props => {
    const {details} = props

    return (
        <li className='list'>
            <img src={details.image} alt='plant' className='plant'/>
            <Link to={`/thankyou-page/${details.name}`}>
                <button className='view-btn' >View Product</button>
            </Link>
            <h1 className='name'>{details.name}</h1>
            <p className='maintenance'>{details.door} , {details.maintenance}</p>
            <div className='rating-cont'>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <p className="maintenance">{details.rating}</p>
            </div>
            <div className="rating-cont">
                <div className="rupee-cont">
                    <FaRupeeSign className="rupee"/>
                    <p className="slash">599</p>
                </div>
                <div className="rupee-cont2">
                    <FaRupeeSign className="rupee"/>
                    <p className="price">{details.price}</p>
                </div>
            </div>
            <div className="cart-buttons">
                <CartPopup/>
                <button className="buy-btn">
                    Buy on rent
                </button>
            </div>
        </li>
    )
}

export default PlantProduct