import React from 'react';
// Styles
import styles from "../Styles/category.module.css"
// Icons
import jacket from "../assets/icons/hoodie-jacket-icon.svg"
import necklace from "../assets/icons/jewelry-showcase-icon.svg"
import shirt from "../assets/icons/men-t-shirts-icon.svg"
import shoe from "../assets/icons/sports-running-shoes-icon.svg"
import television from "../assets/icons/led-television-icon.svg"

const Category = () => {
  return ( 
    <div className={styles.container}>
      <h2> All Categories </h2>
      <div className={styles.allCategory}>
        <div> <img src={jacket} /> </div>
        <div> <img src={necklace} /> </div>
        <div> <img src={shirt} /> </div>
        <div> <img src={shoe} /> </div>
        <div> <img src={television} /> </div>
      </div>
    </div>
   )
}
 
export default Category;
