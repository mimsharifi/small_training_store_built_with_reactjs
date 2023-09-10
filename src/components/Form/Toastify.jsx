import {toast} from "react-toastify"

export const Toastify = (text, type) => {
  if(type == "Success"){
    toast.success(text)
  } else{
    toast.error(text)
  }
}