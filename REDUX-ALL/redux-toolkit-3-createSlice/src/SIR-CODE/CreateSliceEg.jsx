import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../Api/ApiUrl';

// const url='http://hidden-ocean-72098.herokuapp.com/api/featur/company';

export const FetchCompany=createAsyncThunk("featur/company",async ()=>{
    try{
        let res= await axiosInstance.get("featur/company");
        return res?.data;
    }catch (error){
        console.log(error);
    }
})


const initialState={
    featur_company_data:[],
    featur_company_ststus:"idel"
}

export const FeaturCompanySlice= createSlice({
    name:"featurCompanyData",
    initialState,
    reducers:{},
    extraReducers:{

        [FetchCompany.pending]: (state) => {
            state.featur_company_ststus = "loading";
            state.featur_company_data = null;
          },
          [FetchCompany.fulfilled]: (state, { payload }) => {
            state.featur_company_ststus = "idle";
            state.featur_company_data = payload;
          },
          [FetchCompany.rejected]: (state) => {
            state.featur_company_ststus = "reject";
          },
    }
})