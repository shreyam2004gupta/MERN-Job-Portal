import React from "react";
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

const CompaniesTable = () => {
  const companyState= useSelector((store) => store.company );
  const{companies =[]} =companyState || {};
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
          {companies.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                NO Companies
              </TableCell>
            </TableRow>
          )}
          {companies.length > 0 &&
            companies?.map((company) => (
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

                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-30">
                      <div className="flex items-center gap-2">
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
