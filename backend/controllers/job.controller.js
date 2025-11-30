import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      position,
      companyId,
      experience,
    } = req.body;
    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !jobType ||
      !position ||
      !companyId ||
      !experience
    ) {
      return res.status(400).json({
        message: "please fill all the fields",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirement.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      company: companyId,
      experience: experience,
      created_by: req.id,
    });
    await job.save();
    return res
      .status(201)
      .json({ message: "job created successfully", success: true, job });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error", success: false });
  }
};

export const getalljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { requirements: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
        { jobType: { $regex: keyword, $options: "i" } },
        { position: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
      path:"company",
    }).sort({createdAt:-1});
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "no job found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

export const getjobid = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"applications",
    })
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
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

export const getadmin = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({
      created_by: adminId,
    }).populate({
      path:"company",
      sort:{createdAt:-1},
    })
    if (!jobs) {
      return res.status(404).json({
        message: "no jobs found",
        status: false,
      });
    }
    return res.status(200).json({
      jobs,
      status: true,
    });
  } catch {
    console.error(error);
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};