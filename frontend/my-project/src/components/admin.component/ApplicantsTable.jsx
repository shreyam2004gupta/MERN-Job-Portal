import React from 'react'
import { TableBody, TableCaption, TableCell, TableHead } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { MoreHorizontal } from 'lucide-react';


const shortlistedStatus = ["Accepted","Rejected"];
const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of recent applied users</TableCaption>
        <TableRow>
          <TableRow>FullName</TableRow>
          <TableRow>Email</TableRow>
          <TableRow>Contact</TableRow>
          <TableRow>Applied on</TableRow>
          <TableRow>Resume</TableRow>
          <TableRow>Job Title</TableRow>
          
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
        <TableBody>
          <tr>
            <TableCell>FullName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Applied</TableCell>
            <TableCell>Resume</TableCell>
            <TableCell>Job Title</TableCell>
            
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-32">
                  {shortlistedStatus.map((status, index) => {
                    return (
                      <div key={value}>
                        <input
                          type="radio"
                          name="shortlistingStatus"
                          value={status}
                        />
                        {status}
                      </div>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </TableCell>
          </tr>
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicantsTable
