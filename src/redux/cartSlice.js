import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        calcTotal: (state) => {

            state.total = state.items.reduce((acc, item) => {
                // console.log(item.quantity);
                return acc += item.quantity * item.card.info.price;
            }, 0)

        },
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            console.log(action.payload.card.info.id)
            state.items = state.items.filter((item) => {
                return item.card.info.id != action.payload.card.info.id
            })

        },
        clearCart: (state) => {
            state.items = []
        },
        increaseQuantity: (state, action) => {
            console.log("state--", state.items[0].card.info.id);
            console.log("action--", action.payload.card.info.id)
            const cartItem = state.items.findIndex((item) => { return item.card.info.id == action.payload.card.info.id })
            console.log("sliceinc--", cartItem);
            state.items[cartItem].quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            console.log("state--", state.items[0].card.info.id);
            console.log("action--", action.payload.card.info.id)
            const cartItem = state.items.findIndex((item) => { return item.card.info.id == action.payload.card.info.id })
            console.log("sliceinc--", cartItem);
            state.items[cartItem].quantity -= 1;
        },
    }
});
export const { addItem, deleteItem, clearCart, increaseQuantity, decreaseQuantity, calcTotal } = cartSlice.actions;

export default cartSlice.reducer;