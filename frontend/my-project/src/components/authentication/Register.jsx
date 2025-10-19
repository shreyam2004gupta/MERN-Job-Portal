import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import {Input} from "../ui/input";
import { RadioGroupItem, RadioGroup} from "../ui/radio-group"; 
import {Link} from "react-router-dom";
const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-600 rounded-md p-4 m-10"
        >
          <h1 className="font-bold text-ul mb-5 text-center text-blue-500">Register</h1>
          <div className="gap-x-8">
            <div>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter your name"></Input>
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email"></Input>
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password"></Input>
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input type="telephone" placeholder="Enter your number"></Input>
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
              <div className="flex items-center gap-2">
                <Label>Profile Photo</Label>
                <Input type="file" accept="image/" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <button className="block w-full py-3 text-white bg-primary hover:bg-primary/90 rounded-md">
            Register
          </button>
          <p className="text-grey-500 text-sm mt-2 text-center">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
