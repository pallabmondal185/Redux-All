import { configureStore } from "@reduxjs/toolkit";
import { AboutSlice } from "../AboutSlice";
import { CategorySlice } from "../CategorySlice";
import { FeaturCompanySlice } from "../FeaturCompanySlice";
import { AuthSlice } from "../authSlice";

const Store = configureStore({
  reducer: {
    // AboutSlice: AboutSlice.reducer,
    // CategorySliceData:CategorySlice.reducer,
    FeaturCompanySlice:FeaturCompanySlice.reducer,
    // authSlice:AuthSlice.reducer  
  },
});

export default Store;