import React from 'react';
// Styles
import styles from "../Styles/Footer.module.css"
//Icons
import whatsapp from "../assets/icons/whatsapp.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import twitter from "../assets/icons/twitter.svg"
import logo from "../assets/images/mim-store-logo.png"

const Footer = () => {
  return ( 
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.navLink}>
        <h3> Help Center </h3>
        <h3> Community </h3>
        <h3> About Us </h3>
        <h3> Costumer Service </h3>
      </div>

      <div className={styles.social}>
        <h4> Stay in Touch </h4>
        <div> 
        <img src={facebook} />
        <img src={whatsapp} />
        <img src={twitter} />
        <img src={instagram} />
        </div>
      </div>
    </div>
    <div className={styles.bottomFooter}>
      <img src={logo} alt="mim store" style={{width:"60px",}}/>
      <h4> Made with ❤️ by <span> Mim </span> </h4>
    </div>
    </div>
   );
}
 
export default Footer;