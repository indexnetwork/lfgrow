import { configureStore } from "@reduxjs/toolkit";
import indexesReducer from "./slices/indexesSlice";

export const store = configureStore({
	reducer: {
		indexes: indexesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
