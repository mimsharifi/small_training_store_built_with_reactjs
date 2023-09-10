export const Validation = (data, type) => {
  const errors = {}

  if(!data.email){
    errors.email = "Email Required"
  } else if(!/\S+@\S+\.\S+/.test(data.email)){
    errors.email = "Please Insert a Valid Email"
  } else{
    delete errors.email
  }
  if(!data.password){
    errors.password = "Please Insert a Password"
  } else if(data.password.length < 6){
    errors.password = "Password Must Have 6 or More Character"
  }
  
  if(type === "signin"){
    if(!data.name.trim()){
      errors.name = "Name can't be empty"
    } else{
      delete errors.name
    }
    if(!data.confirmpassword){
      errors.confirmpassword = "Re-Enter Your Password"
    } else if(data.confirmpassword !== data.password){
      errors.confirmpassword = "Password Do Not Match"
    } else{
      delete errors.confirmpassword
    }
    if(data.isAccepted){
      delete errors.isAccepted
    } else{
      errors.isAccepted = "Please accept our regulations"
    }
  }

  return errors;
}