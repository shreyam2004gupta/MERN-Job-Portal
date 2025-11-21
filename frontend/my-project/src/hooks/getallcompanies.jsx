import { APPLICANTS_API_COMPANY } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCompanies } from '@/Redux/companyslice';

const getallcompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${APPLICANTS_API_COMPANY}/get`, {
          withCredentials: true,
        });
        console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      } 
    };
    fetchCompanies();
  }, []);
};

export default getallcompanies
