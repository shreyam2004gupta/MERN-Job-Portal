import React from 'react'
import { Table,TableBody,TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from '../ui/badge';
const Appliedjob = () => {
  return (
    <div>
      <Table>
        <TableCaption>Read Applied Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TableRow key={index}>
              <TableCell>23-12-2025</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>Microsoft</TableCell>
              <TableCell>
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Appliedjob
