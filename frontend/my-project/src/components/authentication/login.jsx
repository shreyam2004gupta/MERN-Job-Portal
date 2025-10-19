import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroupItem, RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";

const login = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-600 rounded-md p-4 m-10"
        >
          <h1 className="font-bold text-ul mb-5 text-center text-blue-500">
            Login
          </h1>
          <div className="gap-x-8">
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email"></Input>
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password"></Input>
            </div>
            <div className="flex items-center justify-between ">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r3">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <button className="block w-full py-3 text-white hover:bg-primary/90 rounded-md bg-blue-600">
            Login
          </button>
          <p className="text-grey-500 text-sm mt-2 text-center">
            No Account?{" "}
            <Link to="/Register" className="">
              <button className="block w-3/4 py-3 my-3 text-white flex hover:bg-gray-500  bg-green-400 justify-center items-center max-w-7xl mx-auto">
                 Register
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
