import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components_lite/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { APPLICANTS_API_ENDPOINT } from "@/utils/data";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleApplication } from "@/Redux/applicationSlice";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `/${APPLICANTS_API_ENDPOINT}/${params.id}/applicants`,
          {
            withCredentials: true,
          }
        );
        dispatch(setSingleApplication(res.data.job));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-10">
          Applicants {applicants?.applications?.length}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
