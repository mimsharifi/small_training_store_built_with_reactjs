import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";
export const apiContext = React.createContext();

const ApiProvider = (props) => {

  const [data, setData] = useState([]);

  axios.get(API_URL)
    .then( response => setData(response.data))

  return(
    <apiContext.Provider value={data}>
      {props.children}
    </apiContext.Provider>
  )
}

export default ApiProvider;