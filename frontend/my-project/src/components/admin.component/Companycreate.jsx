import React, { useState } from 'react'
import Navbar from '../components_lite/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { APPLICANTS_API_COMPANY } from '@/utils/data'
import { useDispatch } from 'react-redux'

const Companycreate = () => {
    const[ComapnyName,setCompany]=useState();
    const navigate =useNavigate();
    const dispatch =useDispatch();

   const registercompany=async()=>{
         try{
     const res = await axios.post(`${APPLICANTS_API_COMPANY}/register`,{ComapnyName},{
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials:true,
     });
      console.log(res.data);
      if(res?.data?.success){
      dispatch(setCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.companyId;
        navigate(`admin/companies/${companyId}`);
      }
   }catch(error){
     console.log(error);
   }
   }
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold text-2xl ">Company Name</h1>
        <Label>Company Name</Label>
        <Input type="text" placeholder="Compay Name" className="my-4 " onChange={(e)=> setCompany(e.target.value)}/>
        <div className='flex item-center '>
            <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
            <Button onClick={registercompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default Companycreate
