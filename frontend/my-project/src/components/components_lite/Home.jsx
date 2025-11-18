import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Category from "./Category";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import userJobs from "@/hooks/userJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = userJobs();
  const jobs = useSelector((state) => state.job.allJobs);
  console.log("Jobs in Component:", { loading, error, jobs });
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recuriter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Category />
      {loading && <p>Loading error...</p>}
      {error && <p>Error:{error}</p>}
      {!loading && !error && <LatestJobs job={jobs} />}
      <Footer />
    </div>
  );
};

export default Home;
