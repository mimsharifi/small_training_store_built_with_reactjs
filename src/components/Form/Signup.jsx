import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
// Toastify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toastify } from './Toastify';
// Form
import { Validation } from './Validation';
// Styles
import styles from "../../Styles/Signup.module.css"

function Signup() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false
  });
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (e) => {
    if( e.target.name === "isAccepted" ){
      setData({ ...data, [e.target.name]: e.target.checked }) 
      } else {
        setData({ ...data, [e.target.name]: e.target.value })
      }
    }
    

    useEffect(()=> {
      setError(Validation(data, "signin"))
      // console.log(error)
    }, [data, touched])

    const focusHandler = (e) => {
      console.log("Focused")
      setTouched({ ...touched, [e.target.name]: true })
    }

    const submitHandler = (e) => {
      e.preventDefault();
      if(!Object.keys(error).length){
        Toastify("Successfull Sigin In" ,"Success")
      } else{
        setTouched({
          name: true,
          email: true,
          password: true,
          confirmpassword: true,
          isAccepted: true
        })
        Toastify("Invalid Data" ,"error")
      }
    }

  return ( 
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}> Sign Up </h1>
        <div className={styles.fieldContainer}>
          <label> Name </label>
          <input type='text' name='name' value={data.name}
           onChange={changeHandler}
            onFocus={focusHandler}
             className={(error.name && touched.name ? styles.unCompleted : styles.formInput)} />
          {error.name && touched.name && <span> {error.name} </span>}
        </div>
        <div className={styles.fieldContainer}>
          <label> Email </label>
          <input type='text' name='email' value={data.email}
           onChange={changeHandler}
            onFocus={focusHandler} 
            className={(error.email && touched.email ? styles.unCompleted : styles.formInput)} />
          {error.email && touched.email && <span> {error.email} </span>}
        </div>
        <div className={styles.fieldContainer}>
          <label> Password </label>
          <input type='password' name='password' value={data.password}
           onChange={changeHandler}
            onFocus={focusHandler}
            className={(error.password && touched.password ? styles.unCompleted : styles.formInput)} />
          {error.password && touched.password && <span> {error.password} </span>}
        </div>
        <div className={styles.fieldContainer}>
          <label> Confirm Password </label>
          <input type='password' name='confirmpassword' value={data.confirmpassword}
           onChange={changeHandler}
            onFocus={focusHandler} 
            className={(error.confirmpassword && touched.confirmpassword ? styles.unCompleted : styles.formInput)} />
          {error.confirmpassword && touched.confirmpassword && <span> {error.confirmpassword} </span>}
        </div>
        <div className={styles.accept}>
          <div>
          <label> I accept terms of privacy policy </label>
          <input type='checkbox' name='isAccepted' value={data.isAccepted}
           onChange={changeHandler}
            onFocus={focusHandler}
            className={(error.isAccepted && touched.isAccepted ? styles.unChecked : styles.checked)} />
          </div>
          {error.isAccepted && touched.isAccepted && <span> {error.isAccepted} </span>}
        </div>
        <div className={styles.buttons}>
          <Link to="/login"> Do you have account? </Link>
          <button type='submit' > Sign Up </button>
        </div>
      </form>
      <ToastContainer />
    </div>
   )
}

export default Signup;
