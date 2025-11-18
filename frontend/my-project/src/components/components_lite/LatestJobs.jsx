import React from "react";
import JobCarts from "./JobCarts";
import { useSelector } from "react-redux";


const LatestJobs = () => {
  const alljobs=useSelector((state)=>state.job?.allJobs || []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold ">
        <span className="text-purple-500">Latest Job</span> Openings
      </h2>
      <div className=" grid grid-cols-3 gap-4 my-5">
        {alljobs.length === 0 ? (
           <span>No Job Avaliable</span>) 
           :(alljobs.slice(0,6).map((job) => 
           job?._id ? (
            <JobCarts key={job._id} job={job}></JobCarts>
           ):(
            <span key={Math.random()}>Invalid Job Data</span>
           )
          )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
