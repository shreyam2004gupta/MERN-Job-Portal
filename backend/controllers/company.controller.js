import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloud.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyname, description } = req.body;
    if (!companyname) {
      return res.status(400).json({
        message: "company is required",
        success: false,
      });
    }
    if (!description) {
      return res.status(400).json({
        message: "description is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyname });
    if (company) {
      return res.status(400).json({
        message: "company already exists",
        success: false,
      });
    }
    company = await Company.create({
      name: companyname,
      description,
      userId: req.id,
    });
    return res.status(201).json({
      message: "company created successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};
export const getAllCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "no company found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

export const getcompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    console.log("Backend getcompany called with companyId:", companyId);
    if(!companyId || companyId ==="undefined"){
      return res.status(400).json({
        message:"company id missing",
        success:false,
      })
    }
    const company = await Company.findById(companyId);
    if (!company ) {
      return res.status(404).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    if(error.name==="CastError"){
      return res.status(400).json({
        message:"invalid company id format",
        success:false,
      });
    }
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

export const upadtecompany = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || id === 'undefined') {
      return res.status(400).json({
        message: "Invalid company ID",
        success: false,
      });
    }
    const { name, description, website, location } = req.body;
    const file = req.file;
    let logo =req.body.logo;
     if(file){
        const fileUri = getDataUri(file);
       const cloudinaryResponse = await cloudinary.uploader.upload(
         fileUri.content
       );
        logo = cloudinaryResponse.secure_url;
     }
    
    const updateData = { name, description, website, location };
      if(logo){
        updateData.logo=logo;
      }
     
    const company = await Company.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    
    );
    if (!company) {
      return res.status(404).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "company updated",
      success: true,
    });
  
 } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};
