import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const ThankYouPage = (props) => {
    const { products } = props;
    const { name } = useParams();
    
   
    const viewedProduct = products.find(product => product.name === name);

    return (
        <div className='thankyou-bg-container'>
             <div className='contact'>
                <p className='shipping'>Free Shipping on order above 999/-</p>
                <p className='phone-no'>Call us on: +91 9876805120</p>
            </div>
            <Header/>
            <div className='thank-you-container'>
                <img src={viewedProduct.image} alt='plant' className='viewed-plant'/>
                <h1 className='thankyou-msg'>Thank you for your interenst in {viewedProduct.name}</h1>
                <Link to='/'>
                    <button className='back-btn' >Continue Shopping</button>
                </Link>
            </div>
        </div>
    );

};

export default ThankYouPage;
