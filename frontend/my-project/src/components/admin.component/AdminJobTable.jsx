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
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const AdminJobTable = () => {
  const navigate = useNavigate();
  const { companies, setSearchCompanyByText } = useSelector(
    (store) => store.company
  );
  const { allAdminJobs, setSearchJobByText } = useSelector(
    (store) => store.jobs
  );
  const [filterJobs, setfilterjobs] = useState(allAdminJobs);

  useEffect(() => {
    const filterJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((jobs) => {
        if (!setSearchJobByText) {
          return true;
        }
        return
        jobs.title?.toLowerCase().includes(setSearchJobByText.toLowerCase())|| 
        jobs?.name
          ?.toLowerCase()
          .includes(setSearchJobByText.toLowerCase());
      });
    setfilterjobs(filterJobs);
  }, [companies, setSearchJobByText]);

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
          {filterJobs.length === 0 ? (
            <span>No company added</span>
          ) : (
            filterJobs?.map((jobs) => {
              <TableRow key={jobs._id}>
                <TableCell></TableCell>
                <TableCell>{jobs?.company?.name}</TableCell>
                <TableCell>{jobs.title}</TableCell>
                <TableCell>{jobs.createdAt?.split("T")[0]}</TableCell>

                <TableCell className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div
                        className="flex items-center gap-2"
                        onClick={() =>
                          navigate(`/admin/companies/${jobs._id}`)
                        }
                      >
                        <Edit2 size={16} />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>;
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobTable;
