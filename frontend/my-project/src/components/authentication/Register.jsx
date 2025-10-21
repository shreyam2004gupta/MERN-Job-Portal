import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import {Input} from "../ui/input";
import { RadioGroupItem, RadioGroup} from "../ui/radio-group"; 
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import { USER_API_ENDPOINT } from "@/utils/data";
import { Toaster,toast } from "sonner";

const Register = () => {
    const[input,setInput]=useState({
        fullname:"",
        email:"",
        password:"",
        role:"",
        file:"",
        phoneNumber:"",
      });
      const navigate =useNavigate();

      const changeEventHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
      }
      const FileEventhandler=(e)=>{
        setInput({...input,file: e.target.files ?.[0]});
      }


      const submitHandler= async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append("fullname",input.fullname);
        formData.append("email",input.email);
        formData.append("password",input.password);
        formData.append("role",input.role);
        formData.append("phoneNumber",input.phoneNumber);
        if(input.file){
          formData.append("file",input.file);
        }
         try {
           const res = await axios.post(`${USER_API_ENDPOINT}/register`,formData,{
             headers:{
              "Content-Type":"multipart/form-data"
             },
             withCredentials:true,
           });
           if(res.data.success){
            navigate("/login");
            toast.success(res.data.message);
           }
         } catch(error) {
           console.log(error);
           const errorMessage= error.respnse ? error.response.data.message:"An unexpected error occured";
           toast.error(errorMessage);
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
            Register
          </h1>
          <div className="gap-x-8">
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Enter your name"
              ></Input>
            </div>
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
            <div>
              <Label>Phone Number</Label>
              <Input
                type="telephone"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="Enter your mobile number"
              ></Input>
            </div>
            <div className="flex items-center justify-between ">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    id="r1"
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === "Student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Input
                    id="r2"
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === "Recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center gap-2">
                <Label>Profile Photo</Label>
                <Input
                  type="file"
                  accept="image/"
                  onChange={FileEventhandler}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full py-3 text-white bg-primary hover:bg-primary/90 rounded-md"
          >
            Register
          </button>
          <p className="text-grey-500 text-sm mt-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
