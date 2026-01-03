import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    searchJobByText: "",
    singleJob: null,
    allAppliedJobs:[],
    searchedQuery:"",
  },
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload;
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload;
    },
    setAllAdmin(state, action) {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state,action){
      state.allAppliedJobs = action.payload;
    },
    setSearchQuery(state,action){
      state.searchedQuery = action.payload;
    }
  },
});

export const { setAllJobs, setSingleJob, setAllAdmin, setSearchJobByText,setAllAppliedJobs, setSearchQuery} =
  jobSlice.actions;

export default jobSlice.reducer;
