import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "./loadingSlice";


export const getDashboardDataFunction = createAsyncThunk(
  "user/getDashboardDataFunction",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        'https://api.sftyhub.com/api/user/totaluserMinngsupply',
        
      );

      dispatch(stopLoading());
      console.log(response,'responseApi response')
      return response.data.data;
    } catch (error) {
      dispatch(stopLoading(false));
      console.log('error',error.message)

      return rejectWithValue(error.response?.data?.message || "failed");
    }
  }
);


const initialState = {
  isLoding: false,
  logModal: false,
  dashboardData:{}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Setloding(state, action) {
      state.isLoding = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(getDashboardDataFunction.pending, (state) => {
        state.isLoding = true;
        state.error = null;
      })
      .addCase(getDashboardDataFunction.fulfilled, (state, action) => {
        state.isLoding = false;
        state.dashboardData = action.payload;

      })
      .addCase(getDashboardDataFunction.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      ;
  },
});

export const {
  Setloding,
 
} = userSlice.actions;
export default userSlice.reducer;