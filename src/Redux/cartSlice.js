import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.log("Error reading cart from LocalStorage:", error);
    return [];
  }
};

const initialState = {
  items: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.items.push(product);
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    clearCart: (state) => {
      state.items = [];

      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;