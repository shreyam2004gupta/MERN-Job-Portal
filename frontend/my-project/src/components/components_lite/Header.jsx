import React from 'react'
import { Button} from "../ui/button";
import {Search} from "lucide-react";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="gap-5">
      <div className="text-center">
        <div className="gap-4 flex-col flex">
          <span className="px-4 py-2 rounded-full flex justify-center items-center bg-gray-200 text-red-500">
            <span ><HiBuildingOffice2 /></span>Get Your Dream Job
          </span>

          <h2 className="text-6xl">
            Search Your <span className="text-blue-400">Job !</span>
          </h2>
        </div>
         <p>Starting hunting your job</p>
         <div className="flex w-[30%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input text="text" placeholder="Find your Drean Job" className="outline-none border-none w-full"/>
            <Button className ="rounded-r-full" >
            <Search className="h-6 w-6"/>
            </Button>
         </div>
      </div>
    </div>
  );
}

export default Header
