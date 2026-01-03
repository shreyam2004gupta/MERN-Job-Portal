import { setAllAdmin} from "@/Redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const useadminjob = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAdminJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setAllAdmin(res.data.jobs));
        }else{
          setError("failed");
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchAdminJobs();
  }, [dispatch]);
  return { loading, error };
};

export default useadminjob;
