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
import { setSearchCompanyByText } from "@/Redux/companyslice";

const CompaniesTable = () => {
  const navigate = useNavigate();
  const companyState = useSelector((store) => store.company);

  const { companies = [], setSearchCompanyByText: searchText = "" } =
    companyState || {};

  const [filter, setfilter] = useState(companies);

  useEffect(() => {
    setfilter(companies);
  }, [companies]);

  useEffect(() => {
    const filtercompany =
      companies.length > 0 &&
      companies.filter((company) => {
        if (!searchText) {
          return true;
        }
        return company?.name?.toLowerCase().includes(searchText.toLowerCase());
      });
    setfilter(filtercompany);
  }, [companies, searchText]);

  return (
    <div>
      <Table>
        <TableCaption>Your recent registered companies</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filter.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                NO Companies
              </TableCell>
            </TableRow>
          )}
          {filter.length > 0 &&
            filter.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      className="w-9 h-9 rounded-2xl"
                      src={company.logo || "default-logo-url"}
                      alt={`${company.name} logo`}
                    />
                  </Avatar>
                </TableCell>

                <TableCell>{company.name}</TableCell>

                <TableCell>
                  {company.createdAt?.split("T")[0] || "N/A"}
                </TableCell>

                <TableCell className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div
                        className="flex items-center gap-2"
                        onClick={() =>
                          navigate(`/admin/companies/${company._id}`)
                        }
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

export default CompaniesTable;
