import React from "react";
import Navbar from "./Navbar";
import Job from "./Job9";

const random = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold">Search Result {random.length}</h1>
        <div className="grid grid-cols-3 gap-5">
          {random.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
