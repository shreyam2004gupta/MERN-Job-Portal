import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/Redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Noida",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kanpur",
      "Lucknow",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];
const Filter = () => {
  const [selectedvalue,setSelectedValue] =useState("");
  const handleChange =(value)=>{
    setSelectedValue(value);
  };
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(setSearchQuery(selectedvalue));
  },[selectedvalue]);
  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedvalue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h2>{data.filterType}</h2>
            {data.array.map((item, indx) => {
              const itemId = `Id${index} -${indx}`;
              return(
              <div className="flex items-center" key={itemId}>
                <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                <label htmlFor={itemId}>{item}</label>
              </div>
              );
          })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;
