import React from 'react'
import Navbar from './Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Mail, Pen,Contact } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from 'lucide-react';
import Appliedjob from './Appliedjob';

const skills=["react","html","js","nodejs","mongodb"];
const Profile = () => {
    const isResume=true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border-gray-500 rounded-2xl my-5 p-8 shadow shadow-gray-500 hover:shadow-blue-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-5  ">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage
                className="h-20"
                src="https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg"
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1>Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis itaque, soluta voluptate mollitia consequatur
                exercitationem, numquam eveniet harum autem explicabo saepe eius
                id, earum corrupti fuga. Hic natus dolores ipsum quia vero.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <Mail />
          <span>shreyamgupta123@gmail.com</span>
          <Contact />
          <span>+91 5647259257</span>
        </div>

        <div>
          <div>
            <h1>Skills</h1>
            {skills.length != 0 ? (
              skills.map((items, index) => {
                <Badge key={index}>{index}</Badge>;
              })
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
                  className="bg-blue-500 rounded-2xl hover:bg-gray-400 cursor-pointer"
                >
                  Download Resume
                </a>
              ) : (
                <span>no</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-md font-bold">Applied jobs</h1>
        <Appliedjob />
      </div>
    </div>
  );
}

export default Profile
