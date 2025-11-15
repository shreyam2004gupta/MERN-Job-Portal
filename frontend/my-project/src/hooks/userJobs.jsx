import React,{useEffect} from 'react'

const userJobs = () => {
  useEffect(()=>{
    const fetchJobs=async ()=>{
        try{
            const res = await axios.get();
        }catch(error){
           console.log(error);
        }
    };
  },[]);
}

export default userJobs
