import {configureStore} from "redux";
import { ShopReducer } from "./ShopReducer";

export const SportsStoreDataStore = configureStore(ShopReducer);