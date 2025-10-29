import React from 'react'
import Navbar from "./Navbar";
import Filter from "./Filter";
import Job from "./Job";

const jobArray =[1,2,3,4,5,6,7,8,9];
const Jobs = () => {
  return (
    <div>
      <Navbar/>
        <div className="max-w-7xl mx-auto mt-5">
            <div className="flex gap-5">
         <Filter/>
       { 
       jobArray.length <= 0 ? (
        <span>Job Not Found ! </span>
       ):(
        <div className="flex-1 overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4">
                {jobArray.map((job,index)=>(
      <Job/>
      )
     )}
            </div>
           
        </div>
      )}
     </div>
      </div>
    </div>
  )
}

export default Jobs
