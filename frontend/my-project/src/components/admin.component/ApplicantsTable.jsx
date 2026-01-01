import React from 'react'
import { TableBody, TableCaption, TableCell, TableHead } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { APPLICANTS_API_ENDPOINT } from '@/utils/data';
import { toast } from 'sonner';


const shortlistedStatus = ["Accepted","Rejected"];
const ApplicantsTable = () => {
    const {applicants} =useSelector(store => store.applicants);
    const statusHandler =async(status,id)=>{
        console.log("called");
        try{
            axios.defaults.withCredentials=true;
            const res=await axios.post(`${APPLICANTS_API_ENDPOINT}/status/${id}/update`,
                {status}
            );
            console.log(res);
            if(res.data.success){
                toast.success(res.data.message);
            }
        }catch(error){
            toast.error(error.response.message);
        }
    };
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
        <TableBody>{
            applicants && applicants.application.map((item)=>(
                <tr key={item._id}></tr>
            ))}
          <tr>
            <TableCell>{item?.applicants?.fullname}</TableCell>
            <TableCell>{item?.applicants?.email}</TableCell>
            <TableCell>{item?.applicants?.phoneNumber}</TableCell>
            <TableCell>
                {item.applicants?.profile?.resume ? (
                    <a className =" text-blue-600 cursor-pointer"
                    href ={item?.applicants?.profile?.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Download
                    </a>
                ):(
                    <span>NA</span>
                )}
            </TableCell>
            
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-32">
                  {shortlistedStatus.map((status, index) => {
                    return (
                      <div 
                      onClick={()=> statusHandler(status,item?._id)}
                      className='flex w-fit items-center my-2 cursor-pointer'
                      key={index}>
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
