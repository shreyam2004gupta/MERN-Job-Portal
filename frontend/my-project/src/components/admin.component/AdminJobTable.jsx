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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const navigate = useNavigate();

  const companyState = useSelector((store) => store.company, shallowEqual);

  const { setAllAdmin: allAdminJobs = [] } = useSelector(
    (store) => store.job,
    shallowEqual
  );

  const { companies = [], setSearchCompanyByText: searchText = "" } =
    companyState || {};

  const [filterJob, setfilterJob] = useState(allAdminJobs);

  useEffect(() => {
    setfilterJob(allAdminJobs);
  }, [allAdminJobs]);

  useEffect(() => {
    const filterJobs =
      allAdminJobs.length > 0 &&
      companies.filter((jobItem) => {
        if (!searchText) {
          return true;
        }
        return jobItem?.name?.toLowerCase().includes(searchText.toLowerCase());
      });

    setfilterJob(filterJobs || []);
  }, [companies, searchText, allAdminJobs]);

  return (
    <div>
      <Table>
        <TableCaption>Your recent Posted Job</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJob.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                NO Companies
              </TableCell>
            </TableRow>
          )}
          {filterJob.length > 0 &&
            filterJob.map((job) => (
              <TableRow key={job._id}>
                <TableCell></TableCell>

                <TableCell>{job.name}</TableCell>

                <TableCell>{job.createdAt?.split("T")[0] || "N/A"}</TableCell>

                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                      >
                        <Edit2 size={16} />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobTable;
