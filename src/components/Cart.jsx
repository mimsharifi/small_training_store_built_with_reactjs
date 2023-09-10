import {useContext} from 'react';

// Context
import { cartContext } from '../Context/CartContext';
// Styles
import styles from "../Styles/Cart.module.css"
// Icons
import trash from "../assets/icons/trash.svg"

const Cart = (props) => {

  const {Dispatch} = useContext(cartContext);
  const {id, image, quantity, title, price} = props.data;

    const split = title.split(" ");
    const shortTitle = split[0] + split[2];


  return ( 
      <div className={styles.container}>
        <img className={styles.image} src={image}/>
        
        <div className={styles.content}>
          <h4> {shortTitle} </h4>
          <p> {price} $ </p>
        </div>
          <span className={styles.quantity}> {quantity} </span>
        <div className={styles.buttonContainer}>
          { quantity > 1 ? 
            <button onClick={ ()=> Dispatch({ type: "DECREASE", payload: props.data }) }> - </button>
             : <button onClick={ ()=> Dispatch({ type: "REMOVE", payload: props.data }) } > <img src={trash} /> </button> }

            <button onClick={ ()=> Dispatch({ type: "INCREASE", payload: props.data }) } > + </button>
        </div>
      </div> 
   )
}
 
export default Cart;
