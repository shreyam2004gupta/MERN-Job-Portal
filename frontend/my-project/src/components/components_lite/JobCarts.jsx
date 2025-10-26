import React from 'react';
import {Badge} from "../ui/badge";
const JobCarts = () => {
  return (
    <div className="p-5 rounded-medium shadow-xl bg-white boreder-black hover:shadow-2xl cursor-pointer hover:shadow-purple-400">
      <div>
        <h1 className='text-lg font-medium'>Company Name</h1>
        <p className='text-sm text-gray-400'>INDIA</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">Job</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quod vitae inventore cupiditate dolores libero sapiente rerum odit
          dolor at quasi, porro iusto vero perspiciatis repudiandae hic ratione
          est velit ipsam nesciunt.
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge variant={"ghost"}>
          <span className={"text-blue-400 hover:text-black"}>10 Position</span>
        </Badge>
        <Badge className={"text-purple-400 hover:text-black"} variant={"ghost"}>
          20 lpa
        </Badge>
        <Badge className={"text-red-400 hover:text-black"} variant={"ghost"}>
          Full-Time
        </Badge>
        <Badge className={"text-gray-400 hover:text-black"} variant={"ghost"}>
          Freelancing
        </Badge>
      </div>
    </div>
  );
}

export default JobCarts
