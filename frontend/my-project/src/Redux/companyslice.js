import { createSlice } from "@reduxjs/toolkit";

const companyslice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies:[],
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies, setSearchCompanyByText } =
  companyslice.actions;

export default companyslice.reducer;

export { companyslice };
