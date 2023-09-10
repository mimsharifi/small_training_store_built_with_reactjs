import { createContext } from 'react';
import { useReducer } from 'react';


export const cartContext = createContext();

const initState = {
  selectedItems: [],
  itemCounter: 0,
  totalPrice: 0,
  checkout: false
}

const sumItems = (items) => {
  const itemCounter = items.reduce( (total, current) =>  total + current.quantity , 0 )
  const totalPrice = items.reduce( (total, current) =>  (total + current.price * current.quantity), 0 ).toFixed(2)
  return { itemCounter, totalPrice }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if( !state.selectedItems.find( item => item.id === action.payload.id)){
        state.selectedItems.push({
          ...action.payload,
          quantity: 1
        })
      }
      return {...state, selectedItems: [...state.selectedItems],
      ...sumItems(state.selectedItems),
      checkout: false,
      }

      case "REMOVE":
          const newItems = state.selectedItems.filter( item => item.id !== action.payload.id )

          return { 
                    ...state,
                    selectedItems: [...newItems],
                    ...sumItems(newItems),
                    checkout: false,
                  }

      case "INCREASE":
        const indexI = state.selectedItems.findIndex( item => item.id === action.payload.id )
        state.selectedItems[indexI].quantity++;
        return { ...state,
          ...sumItems(state.selectedItems)
        }
      
      case "DECREASE":
        const indexD = state.selectedItems.findIndex( item => item.id === action.payload.id )
        state.selectedItems[indexD].quantity--;
        return { ...state,
          ...sumItems(state.selectedItems)
        }
      case "CHECK":
        return {
          selectedItems: [],
          itemCounter: 0,
          totalPrice: 0,
          checkout: true
        }
      case "CLEAR":
        return {
          selectedItems: [],
          itemCounter: 0,
          totalPrice: 0,
          checkout: false
        }

    default: 
     return state;
  }
}

const CartContextProvider = (props) => {

  const [state, Dispatch] = useReducer(reducer, initState);

  return ( 
    <cartContext.Provider value={{state, Dispatch}}>
      {props.children}
    </cartContext.Provider>
   )
}
 
export default CartContextProvider;
