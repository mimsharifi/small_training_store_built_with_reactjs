import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from "../Styles/Product.module.css"
// Icons
import trash from "../assets/icons/trash.svg"
// Context
import { cartContext } from '../Context/CartContext';

const Product = (props) => {
  
  const {title, id, price, image} = props.data;
  const {state, Dispatch} = useContext(cartContext)

  // Assets
  const splited = title.split(" ");
  const shortTitle = splited[0] + splited[2];

  const quantityCount = (state, id) => { 
  const index = state.selectedItems.findIndex( item => item.id === id )
  if( index === -1){
    return false
  } else{
    return state.selectedItems[index].quantity
  }
}
  return ( 
    <div className={styles.container}>
      <Link to={`/details/${id}`}> 
      <img src={image} style={{borderRadius: "5px"}}/>
      </Link>
      <div className={styles.info}>
        <p> {shortTitle} </p>
        <span> {price} $ </span>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.link}>
        <Link to={`/details/${id}`}> Details </Link>
        </div>

        <div className={styles.buttonContainer}>
          {quantityCount(state, id) > 1 && 
          <button className={styles.smallButton} onClick={ () => Dispatch({type: "DECREASE", payload: props.data}) }> - </button> }
          
          {quantityCount(state, id) === 1 && 
          <button className={styles.smallButton} onClick={ () => Dispatch({type: "REMOVE", payload: props.data}) }> <img src={trash}/> </button> }
          {quantityCount(state, id) > 0 && <span className={styles.counter}> {quantityCount(state, id)} </span>}
          {quantityCount(state, id) < 1 ?
          <button className={styles.addBtn} onClick={ () => Dispatch({type: "ADD", payload: props.data}) }> Add to cart </button>
          : 
          <button className={styles.smallButton} onClick={ () => Dispatch({type: "INCREASE", payload: props.data}) }> + </button>  }
        </div>
      </div>
    </div>
   )
}
 
export default Product;
