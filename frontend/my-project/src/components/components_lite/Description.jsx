import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
// import usegetjob from "@/hooks/usegetjob";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/Redux/jobSlice";
import { APPLICANTS_API_ENDPOINT, JOB_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { setLoading } from "@/Redux/authslice";

const Description = () => {
  const params = useParams();
  const jobId = params.id;
  console.log(jobId);
  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isApplied, setisapplied] = useState(false);

  const applyjob = async () => {
    try {
      const res = await axios.get(`${APPLICANTS_API_ENDPOINT}/apply/${jobId}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setisapplied(true);
        const updatejob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatejob));
        setisapplied(res.data.job.applications.some(application=>APPLICANTS_API_ENDPOINT.applicant === user?._id))
        console.log(res.data);
        toast.success(res.data.message || "Applied successfully");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  useEffect(() => {
    const fetchSingleJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log("Api response",res.data);
        if (res.data.success) {
          dispatch(setSingleJob(res.data.jobs));
          setisapplied(
            res.data.job.applications.some((application) => application.applicant === user?._id)
          );
        }
        else{
          setError("failed to fetch job");
        }
      } catch (error) {
        console.log(error);
        setError(error.message || "an error occured");
      }finally{
        setLoading(false);
      }
    };
    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);
  console.log("single job", singleJob);

 

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex gap-2 items-center mt-4">
              <Badge variant={"ghost"}>
                <span className={"text-blue-400 hover:text-black"}>
                  {singleJob?.position}
                </span>
              </Badge>
              <Badge
                className={"text-purple-400 hover:text-black"}
                variant={"ghost"}
              >
                {singleJob?.salary}lpa
              </Badge>
              <Badge
                className={"text-red-400 hover:text-black"}
                variant={"ghost"}
              >
                {singleJob?.location}
              </Badge>
              <Badge
                className={"text-gray-400 hover:text-black"}
                variant={"ghost"}
              >
                {singleJob?.jobType}
              </Badge>
            </div>
          </div>

          <div>
            <Button
              onClick={isApplied ? null : applyjob}
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "cursor-pointer bg-gray-700"
                  : "hover:bg-purple-700 cursor-pointer"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>

        <h1 className="border-b-3 border-b-black ">{singleJob?.description}</h1>
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h1>
          Role:<span className="pl-4 font-normal ">{singleJob?.position}</span>
        </h1>
        <h1>
          Location:
          <span className="pl-4 font-normal ">{singleJob?.location}</span>
        </h1>
        <h1>
          Salary:<span className="pl-4 font-normal ">{singleJob?.salary}</span>
        </h1>
        <h1>
          Total Applicants:
          <span className="pl-4 font-normal ">
            {singleJob?.applications?.length}
          </span>
        </h1>
        <h1>
          Post:
          <span className="pl-4 font-normal ">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Description;
