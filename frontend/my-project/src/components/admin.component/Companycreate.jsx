import React, { useState, useEffect } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APPLICANTS_API_COMPANY } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setSingleCompany } from "@/Redux/companyslice";
import { toast } from "sonner";

const Companycreate = () => {
  const [companyName, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const registercompany = async () => {
    try {
      const res = await axios.post(
        `${APPLICANTS_API_COMPANY}/register`,
        { companyname: companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized. Please log in again.");
        navigate("/login");
      } else {
        toast.error("An error occurred while registering the company.");
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl ">Company Name</h1>
          <p className="text-gray-600">Company Description</p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          placeholder="Company Name"
          className="my-4 "
          value={companyName}
          onChange={(e) => setCompany(e.target.value)}
        />
        <div className="flex item-center ">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registercompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Companycreate;
