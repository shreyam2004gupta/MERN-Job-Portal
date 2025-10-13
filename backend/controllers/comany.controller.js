import {Company} from "../models/comapny.model.js";
export const registerCompany = async (req,res)=>{
    try{
        const {companyname} = req.body;
        if(!companyname){
            return req.status(400).json({
                message:"company is required"
            })
            let company = await Company.findOne({name: companyname});
            if(company){
                return res.status(400).json({
                    message:"company already exists"
                })
            }
            company = await Company.create({
                name:companyname,
                userId:req.id
            });
            return res.status(201).json({
                message:"comapny created successfully",
                company,
                success:true,
            });
        }
    }catch (error){
        console.error(error);
    }
};
export const getAllCompanies = async (req,res)=>{
    try{
        const userId = req.id;
        const companies = await Company.findOne({userId});
        if(!companies){
            return res.status(404).json({
                message:"no company found"
            })
        }
        return res.status(200).json({
          companies,
          success: true,
        });
    }
    catch(error){
        console.error(error);
    }
}

export const getcompany = async(req,res)=>{
   try{
      const companyId =res.params.id;
      const company = await Company.findById(companyId);
      if(!Company){
        return res.status(404).json({
            message:"company not founnd"
        });
      }
      res.status(200).json({company, success:true});
   }catch(error){
       console.error(error);
   }
};

export const upadtecompany = async (req,res)=>{
    try{
      const {name,description,website,location}=req.body;
      const file = req.body;

      const update ={name,description,website,location};

      const company = await Company.findByIdAndUpdate(req.params.id,updateData,{
        new:true,
      });
      if(!company){
        return res.status(404).json({
            message:"company not found"
        });
      }
      return res.status(200).json({
        message:"company updated"
      });
    }catch(error){
       console.error(error);
    }
}