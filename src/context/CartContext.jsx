import { createContext, useEffect, useMemo, useReducer } from "react";
import { cartReducer, initialCartState } from "./cartReducer";

export const CartContext = createContext(null);

function getInitialCartState() {
    const savedCart = localStorage.getItem("cart");

    if(savedCart) {
        return JSON.parse(savedCart);
    }

    return initialCartState;
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialCartState,
        getInitialCartState
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    const addItem = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product})
    };

    const removeItem = (productId) => {
        dispatch({ type: "REMOVE_ITEM", payload: productId });
    };

    const increaseQuantity = (productId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
   };

   const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
   };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"});
    };

    const totalItems = state.cartItems.reduce(
        (total, item) => total + item.quantity, 0
    );

    const totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price *item.quantity, 0
    );

     const value = useMemo(
        () => ({
            cartItems: state.cartItems,
            addItem,
            removeItem,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            totalItems,
            totalPrice,
        }),
        [state.cartItems, totalItems, totalPrice]
     );

     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}