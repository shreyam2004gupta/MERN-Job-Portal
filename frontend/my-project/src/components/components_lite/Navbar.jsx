import React from "react";
import { PopoverTrigger, PopoverContent, Popover } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { USER_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { setUser } from "@/Redux/authslice";
const Navbar = () => {
  
  const {user}=useSelector((store)=>store.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logouthandler = async () => {
    try {
      const resp = await axios.post(`${USER_API_ENDPOINT}/logout`, null, {
        withCredentials: true,
      });
      if (resp.data && resp.data.success) {
        dispatch(setUser(null));
        navigate("/");
      } else {
        console.error("failed to logout");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-blue-500"> Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-6">
            <Link to={"/Home"}>Home</Link>
            <Link to={"/Browse"}>Browse</Link>
            <Link to={"/Jobs"}>Jobs</Link>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}>
                <Button className="bg-black" hover:bg-grey>
                  Login
                </Button>
              </Link>
              <Link to={"/Register"}>
                <Button className="bg-blue-400" hover:bg-red-700>
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Shreyam Gupta</h3>
                  </div>
                </div>
                <div className="cursor-pointer flex">
                  <User2></User2>
                  <Button variant="links">
                    <Link to="/Profile">View Profile</Link>
                  </Button>
                </div>
                <div className="cursor-pointer flex">
                  <LogOut></LogOut>
                  <Button onClick={logouthandler} variant="links">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
