import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Job9 from "./Job9";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import userJobs from "@/hooks/userJobs";

const Jobs = () => {
  const { loading, error } = userJobs();
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }
    const filterJobs = allJobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.description?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        String(job.experienceLevel || "")
          .toLowerCase()
          .includes(searchedQuery.toLowerCase()) ||
        String(job.salary || "")
          .toLowerCase()
          .includes(searchedQuery.toLowerCase())
      );
    });
    setFilterJobs(filterJobs);
  }, [allJobs, searchedQuery]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div>
            <Filter />
          </div>

          {loading ? (
            <span>Loading jobs...</span>
          ) : error ? (
            <span>Error: {error}</span>
          ) : filterJobs.length <= 0 ? (
            <span>Job Not Found ! </span>
          ) : (
            <div className="flex-1 overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={job._id}
                  >
                    <Job9 job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
