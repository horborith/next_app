import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../store";

export interface IProductState {
  items: any;
}

const initialState: IProductState = {
  items: [
    { id: "1", name: "Coca" },
    { id: "2", name: "Pepsi" },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct(state, action: any) {
      state.items = [...state.items, action.payload];
    },
    removeProduct(state, action: any) {
      const items = state.items.filter((x: any) => x.id !== action.payload.id);
      state.items = items;
    },
  },
});

export const { addNewProduct, removeProduct } = productSlice.actions;

export const selectProduct = ({ product }: RootState) => product.items;

export default productSlice.reducer;
