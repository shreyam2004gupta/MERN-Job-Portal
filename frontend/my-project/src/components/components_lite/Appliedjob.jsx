import React from 'react'
import { Table,TableBody,TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from '../ui/badge';
const Appliedjob = () => {
  const { allAppliedJobs } = useSelector((store)=>store.job);
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
         { allAppliedJobs.length <= 0 ? <span>You Have not Applied any job yet</span> : allAppliedJobs.map((appliedjob) => (
            <TableRow key={appliedjob._id}>
              <TableCell>{appliedjob?.createdAt.split("T")[0]}</TableCell>
              <TableCell>{appliedjob.job?.title}</TableCell>
              <TableCell>{appliedjob.job?.company.name}</TableCell>
              <TableCell>
                <Badge className={`${appliedjob?.status === "rejected"? 'bg-red-500': appliedjob?.status === "accepted"?'bg-green-500' : 'bg-gray-500'}`}>{appliedjob?.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Appliedjob
