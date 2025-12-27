import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { companies = [], searchCompanyByText = "" } = useSelector(
    (store) => store.company || {},
    shallowEqual
  );
  const { allAdminJobs = [], searchJobByText = "" } = useSelector(
    (store) => store.job || {},
    shallowEqual
  );

  const navigate = useNavigate();

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  useEffect(() => {
    const jobsArray = Array.isArray(allAdminJobs) ? allAdminJobs : [];

    const filteredJobs = jobsArray.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  if (companies.length === 0) {
    return <div>Loading companies data...</div>;
  }

  return (
    <div>
      <Table>
        <TableCaption>Your recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.isArray(filterJobs) && filterJobs.length === 0 ? (
           
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Job Added
              </TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-2 w-fit cursor-pointer mb-1"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                      <hr />
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center gap-2 w-fit cursor-pointer mt-1"
                      >
                        <Eye className="w-4"></Eye>
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
