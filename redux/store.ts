import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./reducers/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { recipeSlice } from "./reducers/recipeSlice";
import { categorySlice } from "./reducers/categorySlice";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["user"]
};

const rootReducer = combineReducers({
    authentication: authenticationSlice.reducer,
    recipe: recipeSlice.reducer,
    category: categorySlice.reducer
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

// reducers are saved in store
const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

const persistor = persistStore(store);

// state of the store, including everything in redux folder
export type RootState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;

const stores = { store, persistor };
export default stores;
