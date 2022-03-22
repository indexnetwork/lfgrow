import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";

// Define a type for the slice state
export interface IndexesState {
  owned: any[];
	collected: any[];
}

// Define the initial state using that type
const initialState: IndexesState = {
	owned: [],
	collected: [],
};

export const indexesSlice = createSlice({
	name: "indexes",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setOwned: (state, action: PayloadAction<any[]>) => {
			state.owned = action.payload;
		},
		setCollected: (state, action: PayloadAction<any[]>) => {
			state.collected = action.payload;
		},
	},
});

export const { setOwned, setCollected } = indexesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIndexes = (state: RootState) => state.indexes;

export default indexesSlice.reducer;
