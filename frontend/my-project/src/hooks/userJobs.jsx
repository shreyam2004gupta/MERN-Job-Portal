import { setAllJobs } from "@/Redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const userJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return { loading, error };
};

export default userJobs;
