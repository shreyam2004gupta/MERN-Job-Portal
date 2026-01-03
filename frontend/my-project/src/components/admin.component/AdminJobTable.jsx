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
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal,Eye } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const {companies,searchCompanyByText} =useSelector((store)=>store.company);
  const navigate = useNavigate();
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setfilterjobs] = useState(allAdminJobs);

  useEffect(() => {
    const filteredJobs =
      allAdminJobs && allAdminJobs.length >= 0
        ? allAdminJobs.filter((job) => {
            if (!searchJobByText) {
              return true;
            }
            return (
              job.title
                ?.toLowerCase()
                .includes(searchJobByText.toLowerCase()) ||
              job?.company?.name
                ?.toLowerCase()
                .includes(searchJobByText.toLowerCase())
            );
          })
        : [];
    setfilterjobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);
   console.log("COMPANIES",companies);
   if(!companies){
    return <div>Loading...</div>
   }
  return (
    <div>
      <Table>
        <TableCaption>Your recent posted job's</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs && filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>No jobs added</TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.createdAt?.split("T")[0]}</TableCell>

                <TableCell className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div
                        className="flex items-center gap-2"
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                      >
                        <Edit2 size={16} />
                        <span>Edit</span>
                      </div>
                      <hr />
                      <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 w-fit cursor-pointer">
                        <Eye></Eye>
                        <span>Application</span>
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

export default AdminJobTable;
