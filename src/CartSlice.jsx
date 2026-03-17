import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    //Adds a new item to the shoping cart
    addItem: (state, action) => {
        const {name, image, cost} = action.payload; //Gets the products infromation from the action payload
        const currentItem = state.items.find(item => item.name === name);
        if(currentItem){
            currentItem.quantity++;
        }
        else{
            state.items.push({ name, image, cost, quantity: 1});
        }
    },

    //Completly deletes the item from the shopping cart by using its name as the key
    removeItem: (state, action) => {
        
    },

    //Updates the current quntity of the item in the shopping cart
    updateQuantity: (state, action) => {
        //Gets the products infromation from the action payload
        const {name,quantity} = action.payload;
        //This section is to check if the item exists, if it does the item is updated
        const itemToUpdate = state.items.find(item => item.name === name);
        if(itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    },

    toggleItemSelection: (state, action) => {
        action.payload.selected = !action.payload.selected;
    },
  },
});

export const { addItem, removeItem, updateQuantity, toggleItemSelection } = CartSlice.actions;

export default CartSlice.reducer;
