import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./Cake/cakeReducer";

const store = configureStore({ reducer: cakeReducer });

export default store;
