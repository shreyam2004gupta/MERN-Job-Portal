import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminjobs:[],
    searchJobbtText:"",
    singleJob:null,
  },
  reducers: {
    setAllJobs(state, action){
      state.allJobs = action.payload;
    },
    setSingleJob(state,action){
      state.singleJob = action.payload;
    },
    setAllAdmin(state,action){
     state.allAdminjobs=action.payload;
    },
    setSearchJobByText(state,action){
      state.searchJobbtText=action.payload;
    }
  },
});

export const { setAllJobs,setSingleJob,setAllAdmin,setSearchJobByText } = jobSlice.actions;

export default jobSlice.reducer;
