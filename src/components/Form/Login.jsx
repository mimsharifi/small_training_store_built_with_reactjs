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

function Login() {

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
      setError(Validation(data, "login"))
      // console.log(error)
    }, [data, touched])

    const focusHandler = (e) => {
      console.log("Focused")
      setTouched({ ...touched, [e.target.name]: true })
    }

    const submitHandler = (e) => {
      e.preventDefault();
      if(!Object.keys(error).length){
        Toastify("Successfull Loged In" ,"Success")
      } else{
        setTouched({
          email: true,
          password: true,
        })
        Toastify("Invalid Data" ,"error")
      }
    }

  return ( 
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}> Login </h1>
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
        <div className={styles.buttons}>
          <Link to="/signup"> Create Account? </Link>
          <button type='submit' > Login </button>
        </div>
      </form>
      <ToastContainer />
    </div>
   )
}

export default Login;
