import { allProducts } from "@/constants/data";
import { createContext, useContext, useReducer } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartState {
  items: any[];
}

interface CartAction {
  type: string;
  payload: any;
}

interface CartContextType {
  state: CartState;
  dispatch: (action: CartAction) => void;
}

const CartContext = createContext<CartContextType>({
  state: { items: [] },
  dispatch: () => {},
});

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      const productIndex = allProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1 && allProducts[productIndex].stock > 0) {
        allProducts[productIndex].stock -= 1;
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item: { id: any }) => item.id !== action.payload.id
        ),
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
