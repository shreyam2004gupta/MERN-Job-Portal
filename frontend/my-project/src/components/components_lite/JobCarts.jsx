import React from "react";
import { Badge } from "../ui/badge";
import Jobs from "./Jobs";
import { useNavigate } from "react-router-dom";

const JobCarts = ({ job }) => {
  console.log(job);
  const navigate =useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white boreder-black hover:shadow-2xl cursor-pointer hover:shadow-purple-400"
    >
      <div>
        <h1 className="text-lg font-medium">
          {job.name }
        </h1>
        <p className="text-sm text-gray-400">INDIA</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">{job.title}</h2>
        <p>{job.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge variant={"ghost"}>
          <span className={"text-blue-400 hover:text-black"}>
            {job.position}
          </span>
        </Badge>
        <Badge className={"text-purple-400 hover:text-black"} variant={"ghost"}>
          {job.salary}lpa
        </Badge>
        <Badge className={"text-red-400 hover:text-black"} variant={"ghost"}>
          {job.location}
        </Badge>
        <Badge className={"text-gray-400 hover:text-black"} variant={"ghost"}>
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCarts;
