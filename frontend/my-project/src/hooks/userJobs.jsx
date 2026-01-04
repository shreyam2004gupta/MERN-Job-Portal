import { setAllJobs } from "@/Redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const userJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((store) => store.job);
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`,
          {
            withCredentials: true,
          }
        );
        console.log("API Response:", res.data);
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetched job");
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [dispatch]);
  return { loading, error };
};

export default userJobs;
