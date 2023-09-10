import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
// Context
import { apiContext } from '../Context/ApiContext';
// Styles
import styles from "../Styles/ProductDetails.module.css"

const ProductDetails = () => {
  const {id} = useParams();
  const data = useContext(apiContext);

  const product = data[id -1]
  const {title, description, category, image, price} = product;

  return ( 
    <div className={styles.container} >
      <img className={styles.image} src={image}/>
      <div className={styles.information}>
        <h4> {title} </h4>
        <p className={styles.description}> {description} </p>
        <p className={styles.category}> <span> Category: </span> {category} </p>
        <div className={styles.buttonContainer}>
        <p className={styles.price}> {price} $ </p>
        <Link to='/'> Back to Shop </Link>
        </div>
      </div>
    </div>
   )
}
export default ProductDetails;