import { createStore } from "@reduxjs/toolkit";
import cakeReducer from "./Cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;
