import { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from '../Context/CartContext';
// Styles
import styles from "../Styles/Header.module.css"
//Icons
import shop from "../assets/icons/shop.svg"
import home from "../assets/icons/home.svg"
import person from "../assets/icons/person.svg"


const Header = () => {

  const {state} = useContext(cartContext);

  return ( 
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.links}>
          <Link to='/'> <img src={home} /> </Link>
          <Link to='/login'> <img src={person} /> </Link>
        </div>

        <Link className={styles.shop} to='/cart'> <img src={shop}/> <span> {state.itemCounter} </span>  </Link>
      </div>
    </div>
   );
}
 
export default Header;