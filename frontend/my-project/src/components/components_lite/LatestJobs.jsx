import React from "react";
import JobCarts from "./JobCarts";
const random = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold ">
        <span className="text-purple-500">Latest Job</span> Openings
      </h2>
      <div className=" grid grid-cols-3 gap-4 my-5">
        {random.slice(0,6).map((job, index) => {
          return <JobCarts key={index} />;
        })}
      </div>
    </div>
  );
};

export default LatestJobs;
