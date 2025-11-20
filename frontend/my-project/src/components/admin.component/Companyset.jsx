import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import axios from "axios";
import { APPLICANTS_API_COMPANY } from "@/utils/data";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const Companyset = () => {
  const [input, setinput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const params = useParams();
  const changeeventHandler = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };
  const changefilehandler = (event) => {
    const file = event.target.files[0];
    setinput({ ...input, file });
  };
  const submithandler = async (event) => {
    event.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("website", input.website);
    formdata.append("location", input.location);
    if (input.file) {
      formdata.append("file", input.file);
    }
    try {
      setloading(true);
      const res = await axios.put(
        `${APPLICANTS_API_COMPANY}/update/${params._id}`,
        formdata,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submithandler}>
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate("/admin/companies")}
              className="flex items-center gap-2 text-gray-600 font-semibold"
              variant="outline"
            >
              <ArrowLeft />
              Back
            </Button>
            <h1 className="font-bold text-blue-700">Company Setup</h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <Label className="font-bold">Company Name</Label>
              <Input
                className="shadow-blue-700 hover:shadow-purple-700"
                type="text"
                name="name"
                value={input.name}
                onChange={changeeventHandler}
              ></Input>
            </div>
            <div>
              <Label className="font-bold">Company Description</Label>
              <Input
                className="shadow-blue-700 hover:shadow-purple-700"
                type="text"
                name="description"
                value={input.description}
                onChange={changeeventHandler}
              ></Input>
            </div>
            <div>
              <Label className="font-bold">Company Website</Label>
              <Input
                className="shadow-blue-700 hover:shadow-purple-700"
                type="text"
                name="website"
                value={input.website}
                onChange={changeeventHandler}
              ></Input>
            </div>
            <div>
              <Label className="font-bold">Company Location</Label>
              <Input
                className="shadow-blue-700 hover:shadow-purple-700"
                type="text"
                name="location"
                value={input.location}
                onChange={changeeventHandler}
              ></Input>
            </div>
            <div>
              <Label className="font-bold">Company logo</Label>
              <Input
                type="file"
                name="file"
                accept="image/*"
                className="shadow-blue-700 hover:shadow-purple-700"
                onChange={changefilehandler}
              ></Input>
            </div>
          </div>
          <Button type="submit" className="">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Companyset;
