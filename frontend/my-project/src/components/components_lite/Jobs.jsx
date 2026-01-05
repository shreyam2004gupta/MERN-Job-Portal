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
    const filtered = allJobs.filter((job) => {
      const query = searchedQuery.toLowerCase();
      
      if (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query)
      ) {
        return true;
      }
      
      if (query.includes("years")) {
        const expMatch = query.match(/(\d+)-(\d+)\s*years/);
        if (expMatch) {
          const minExp = parseInt(expMatch[1]);
          const maxExp = parseInt(expMatch[2]);
          if (job.experienceLevel >= minExp && job.experienceLevel <= maxExp) {
            return true;
          }
        }
      }
      
      if (query.includes("k")) {
        const salMatch = query.match(/(\d+)k-(\d+)k/);
        if (salMatch) {
          const minSal = parseInt(salMatch[1]) * 1000;
          const maxSal = parseInt(salMatch[2]) * 1000;
          if (job.salary >= minSal && job.salary <= maxSal) {
            return true;
          }
        }
        const salMatchOver = query.match(/(\d+)k\+/);
        if (salMatchOver) {
          const minSal = parseInt(salMatchOver[1]) * 1000;
          if (job.salary >= minSal) {
            return true;
          }
        }
      }
      return false;
    });
    setFilterJobs(filtered);
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
