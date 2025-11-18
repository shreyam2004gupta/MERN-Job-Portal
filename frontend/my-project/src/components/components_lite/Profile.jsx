import React from 'react'
import Navbar from './Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Mail, Pen,Contact } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from "@/components/ui/badge";
import Appliedjob from './Appliedjob';
import {useState} from 'react';
import EditProfile from "./EditProfile";
import { useSelector } from 'react-redux';

// const skills=["react","html","js","nodejs","mongodb"];
const isResume = true;
const Profile = () => {
  const[open,opened]=useState(false);
  const {user}=useSelector((store)=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border-gray-500 rounded-2xl my-5 p-8 shadow shadow-gray-500 hover:shadow-blue-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-5  ">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage
                className="h-20"
                src={ "https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg"}
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1>{user?.fullname}</h1>
              <p>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline" onClick={()=>opened(true)}>
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <Mail />
          <span><a href={`mailto:${user?.email}`}>{user?.email}</a></span>
          <Contact />
          <span><a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a></span>
        </div>

        <div>
          <div>
            <h1 className='font-bold'>Skills</h1>
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((items, index) => 
                <Badge key={index}>{items}</Badge>
              )
            ) : (
              <span>na</span>
            )}
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <label className="text-md font-bold">upload resume</label>
            <div>
              {isResume ? (
                <a
                  target="_blank"
                  href="https://in.linkedin.com/in/shreyam-gupta-2b6858279"
                  download="resume.pdf"
                  className="bg-blue-500 rounded-3xl hover:bg-gray-400 cursor-pointer"
                >
                  Download Resume
                </a>
              ) : (
                <span className='text-red-500'>Not Found !</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-md font-bold">Applied jobs</h1>
        <Appliedjob />
      </div>
      <EditProfile open={open} opened={opened}/>
    </div>
  );
}

export default Profile
