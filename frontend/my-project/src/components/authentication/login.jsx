import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroupItem, RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const login = () => {
      const[input,setInput]=useState({
         
          email:"",
          password:"",
          role:"",
          
          
        });
        
        const changeEventHandler=(e)=>{
          setInput({...input,[e.target.name]:e.target.value});
        }
        const FileEventhandler=(e)=>{
          setInput({...input,file: e.target.files ?.[0]});
        }
  
  
       const submitHandler= async(e)=>{
               e.preventDefault();
               
                try {
                  const res = await axios.post(`${USER_API_ENDPOINT}/login`,formData,{
                    headers:{
                     "Content-Type":"application/json",
                    },
                    withCredentials:true,
                  });
                  if(res.data.success){
                   navigate("/");
                   toast.success(res.data.message);
                  }
                } catch(error) {
                  console.error(error);
                  toast.error(error.response.data.message);
                }
             };
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-600 rounded-md p-4 m-10"
        >
          <h1 className="font-bold text-ul mb-5 text-center text-blue-500">
            Login
          </h1>
          <div className="gap-x-8">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
              ></Input>
            </div>
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
              ></Input>
            </div>
            <div className="flex items-center justify-between ">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
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
