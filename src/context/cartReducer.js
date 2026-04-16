export const initialCartState = {
  cartItems: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM": {
      const productId = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };
    }

    case "INCREASE_QUANTITY": {
      const productId = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREASE_QUANTITY": {
      const productId = action.payload;

      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
}