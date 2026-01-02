import { setAllAppliedJobs } from "@/Redux/jobSlice";
import { APPLICANTS_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usegetallappliedjobs =()=>{
    const dispatch =useDispatch();
    useEffect(()=>{
        const fetchAppliedJobs = async ()=>{
            try{
                const res = await axios.get(`${APPLICANTS_API_ENDPOINT}/get`,{
                    withCredentials:true,
                });
                console.log("API response",res.data);
                if(res.data.success){
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            }catch(error){
                console.log(error);
            }
        };
        fetchAppliedJobs();
    },[dispatch]);
    return null;
};

export default usegetallappliedjobs;