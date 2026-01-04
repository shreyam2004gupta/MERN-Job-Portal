import { APPLICANTS_API_COMPANY } from "@/utils/data";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSingleCompany } from "@/Redux/companyslice";
import { toast } from "sonner";

const usegetcompany = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  // console.log(res.data);

  useEffect(() => {
    console.log("usegetcompany called with companyId:", companyId);
    if (!companyId || companyId === "undefined") {
      // setError("Invalid company ID");
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
        console.log("API Response:", res.data);
        dispatch(setSingleCompany(res.data.company));
      } catch (error) {
        console.error(error);
        setError(error);
        toast.error(error.response?.data?.message || "Failed to fetch company");
      } finally {
        setLoading(false);
      }
    };
    if (companyId) {
      fetchSingleCompany();
    }
  }, [companyId, dispatch]);

  return { loading, error };
};

export default usegetcompany;
