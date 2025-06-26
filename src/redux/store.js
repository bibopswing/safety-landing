import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './slice/dashboardSlice'
import loadingReducer from './slice/loadingSlice'

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        loader:loadingReducer
    },
});

export default store;
