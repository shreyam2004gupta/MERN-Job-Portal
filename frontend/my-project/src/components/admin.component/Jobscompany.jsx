import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/Redux/companyslice";
import AdminJobTable from "./AdminJobTable";
import useadminjob from "@/hooks/useadminjob";

const Jobscompany = () => {
  useadminjob();
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);
  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange={(e) => setinput(e.target.value)}
          ></Input>
          <Button onClick={() => navigate("/admin/jobs/create")}>
            {" "}
            New Job
          </Button>
        </div>
        <div>
          <AdminJobTable />
        </div>
      </div>
    </div>
  );
};

export default Jobscompany;
