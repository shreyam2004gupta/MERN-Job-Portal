import { APPLICANTS_API_COMPANY } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSingleCompany } from "@/Redux/companyslice";

const usegetcompany = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    if (!companyId || companyId === "undefined") {
      return;
    }

    const fetchSingleCompany = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `${APPLICANTS_API_COMPANY}/get/${companyId}`,
          {
            withCredentials: true,
          }
        );

        
          dispatch(setSingleCompany(res.data.company));
        
      } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleCompany();
  }, [companyId, dispatch]);

  return { loading, error };
};

export default usegetcompany;
