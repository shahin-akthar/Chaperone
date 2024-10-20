import Popup from 'reactjs-popup'; 
import './index.css';

const CartPopup = () => {  
  return (
    <Popup
      modal
      trigger={
        <button className="cart-btn">
          - Add to cart +
        </button>
      }
    >
      {close => (
        <div className='popup-container'> 
          <h1 className='cart'>Your Cart</h1> 
          <hr style={{ border: '1px solid #6E6E6E', width: '100%' }} />
          <h1 className='congrats'>Congratulations Order Placed!</h1>
          <img src='https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__' alt='plant' />
          <p className='cart-para'>Thank you for choosing Chaperone services.
          We will soon get in touch with you!</p>
          <button className='btn' onClick={close}>Continue Shopping</button> 
        </div>
      )}
    </Popup>
  );
};

export default CartPopup; 
