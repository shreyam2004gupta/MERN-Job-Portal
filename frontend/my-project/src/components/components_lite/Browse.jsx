import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Job from "./Job9";
import { useDispatch,useSelector } from "react-redux";
import usegetcompany from "@/hooks/usegetcompany";
import { setSearchJobByText } from "@/Redux/jobSlice";


const Browse = () => {
  usegetcompany();
  const {allJobs}= useSelector((store)=>store.job);
  const dispatch =useDispatch();
  useEffect(()=>{
    return()=>{
      dispatch(setSearchJobByText(""));
    };
  },[]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold">Search Result {allJobs.length}</h1>
        <div className="grid grid-cols-3 gap-5">
          {allJobs.map((job) => {
            return <Job key={job._id} job={job}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
