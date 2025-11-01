import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Description = () => {
  const isApplied = false;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Title</h1>
            <div className="flex gap-2 items-center mt-4">
              <Badge variant={"ghost"}>
                <span className={"text-blue-400 hover:text-black"}>
                  10 Position
                </span>
              </Badge>
              <Badge
                className={"text-purple-400 hover:text-black"}
                variant={"ghost"}
              >
                20 lpa
              </Badge>
              <Badge
                className={"text-red-400 hover:text-black"}
                variant={"ghost"}
              >
                Full-Time
              </Badge>
              <Badge
                className={"text-gray-400 hover:text-black"}
                variant={"ghost"}
              >
                Freelancing
              </Badge>
            </div>
          </div>

          <div>
            <Button
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

        <h1 className="border-b-3 border-b-black ">Job Description</h1>
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h1>
          Role:<span className="pl-4 font-normal ">Software Enginner</span>
        </h1>
        <h1>
          Location:<span className="pl-4 font-normal ">Remote</span>
        </h1>
        <h1>
          Salary:<span className="pl-4 font-normal ">$5000-$7000</span>
        </h1>
      </div>
    </div>
  );
};

export default Description;
