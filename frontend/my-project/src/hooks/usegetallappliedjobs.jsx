import { setAllAppliedJobs } from "@/Redux/jobSlice";
import { APPLICANTS_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usegetallappliedjobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        console.log("Fetching applied jobs...");
        const res = await axios.get(`${APPLICANTS_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("API response", res.data);
        if (res.data.success) {
          console.log("Dispatching applied jobs:", res.data.application);
          dispatch(setAllAppliedJobs(res.data.application));
        } else {
          console.log("API returned success false:", res.data.message);
        }
      } catch (error) {
        console.log("Error fetching applied jobs:", error);
        // if (error.response) {
        //   console.log(
        //     "Response error:",
        //     error.response.status,
        //     error.response.data
        //   );
        // } else if (error.request) {
        //   console.log("Request error: No response received");
        // } else {
        //   console.log("General error:", error.message);
        // }
      }
    };
    fetchAppliedJobs();
  }, [dispatch]);
  return null;
};

export default usegetallappliedjobs;
