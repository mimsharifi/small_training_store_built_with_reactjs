import {useContext} from 'react';
// Context
import { apiContext } from "../Context/ApiContext";
// Styles
import styles from "../Styles/ShopingProducts.module.css"
// Components
import Product from './Product';
import Category from './Category';

import ImageSlider from './SliderImage';

const ShopingProduct = () => {

  const product = useContext(apiContext)

  return ( 
    <div className={styles.container}>
          <ImageSlider/>
        <div className={styles.category}>
          <Category />
        </div>
        <div className={styles.mainProducts}>
          <h2> Our Products </h2>
          <div className={styles.products}>
          {product.map( item => <Product key={item.id} data={item} /> )}
          </div>
        </div>
    </div>
   );
}
 
export default ShopingProduct;