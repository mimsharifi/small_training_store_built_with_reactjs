import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { cartContext } from '../Context/CartContext';
// Component
import Cart from './Cart';
// Styles
import styles from "../Styles/ShopCart.module.css"

const ShopCart = () => {

  const {state, Dispatch} = useContext(cartContext);

  return ( 
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map( item => <Cart key={item.id} data={item} /> )}
      </div>

      {  state.itemCounter > 0 && <div className={styles.payments}>
        <p> <span> Quantity: </span> {state.itemCounter}  </p>
        <p> <span> Total Price: </span> {state.totalPrice} $  </p>
        <div className={styles.buttonContainer}>
          <button className={styles.clear} onClick={ () => Dispatch({ type: "CLEAR" }) }> Clear </button>
          <button className={styles.checkout} onClick={ () => Dispatch({ type: "CHECK" }) }> CheckOut </button>
        </div>
      </div> }

      {
        state.checkout && 
        <div className={styles.complete}>
          <h4> Your Payments Successfully Checked </h4>
          <Link to='/'> Back To Shop </Link>
        </div>
      }
      {
        !state.checkout && state.itemCounter === 0 &&
        <div className={styles.complete}>
          <h4> Your Cart Successfully Cleared ! </h4>
          <Link to='/'> Want to Buy ? </Link>
        </div>
      }

    </div>
   )
}
 
export default ShopCart;
