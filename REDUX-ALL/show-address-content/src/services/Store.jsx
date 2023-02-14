import { createStore } from "redux";
import rootReducert from "./reducer";

const store=createStore(rootReducert);

export default store;