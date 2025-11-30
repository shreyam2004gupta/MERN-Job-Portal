import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/Avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job9 = ({ job }) => {
  const navigate = useNavigate();

  const dayAgo = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const timediff = currentDate - createdAt;
    return Math.floor(timediff / (1000 * 3600 * 24));
  };
  return (
    <div className="p-5 rounded-md shadow-xl bg-white boreder-black hover:shadow-2xl cursor-pointer hover:shadow-purple-400">
      <div className="flex items-center justify-between">
        <p>
          {dayAgo(job?.createdAt) === 0
            ? "Today"
            : `${dayAgo(job?.createdAt)} days ago`}
        </p>
        <Button variant="ouline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="ouline" size="icons">
          <Avatar>
            <AvatarImage src={job?.company?.logo}></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">
            {job?.company?.name || "Company Name"}
          </h1>
          <p className="text-sm text-gray-400">INDIA</p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="font-bold text-lg my-2">{job?.title}</h2>
          <p>{job?.description}</p>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <Badge variant={"ghost"}>
            <span className={"text-blue-400 hover:text-black"}>
              {job?.position}
            </span>
          </Badge>
          <Badge
            className={"text-purple-400 hover:text-black"}
            variant={"ghost"}
          >
            {job?.salary}
          </Badge>
          <Badge className={"text-red-400 hover:text-black"} variant={"ghost"}>
            {job?.location}
          </Badge>
          <Badge className={"text-gray-400 hover:text-black"} variant={"ghost"}>
            {job?.jobType}
          </Badge>
        </div>
      </div>
      <div></div>
      <div className="flex items-center gap-4">
        <Button
          className="p-6"
          variant="ouline"
          size="icons"
          onClick={() => {
            navigate(`/description/${job?._id}`);
          }}
        >
          Details
        </Button>
        <Button className="p-1 bg-purple-600" variant="ouline" size="icons">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job9;
