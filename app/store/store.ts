import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


import { TypedUseSelectorHook, useSelector } from "react-redux";
import counterSlice from "./features/counterSlice";



const generatePersistConfig = (key: string) => ({
  key,
  storage,
});


const persistedCounterReducer = persistReducer(generatePersistConfig("counter"), counterSlice);




export const store = configureStore({
  reducer: {
    counter : persistedCounterReducer
},
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
