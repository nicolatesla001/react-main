import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catsReducer from "./slices/cats.slice";
import dogReducer from "./slices/dog.slice";

const rootReducer=combineReducers({
    cats:catsReducer,
    dogs:dogReducer
});

export const store=configureStore({
    reducer: rootReducer
})
