import { Application } from "../models/Application.model.js";
import { Job } from "../models/job.model.js";

export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({ message: "Invalid job", success: false });
    }
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "you have already applying for job", success: false });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.server(404).json({ message: "job not found", success: false });
    }
    const newapplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newapplication._id);
    await job.save();

    return res
      .status(201)
      .json({ message: "application submitted", success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "success error", success: false });
  }
};

export const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;
    const application = (await Application.find({ applicant: userId }))
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });
    if (!application) {
      return res
        .status(404)
        .json({ message: "no application found", success: false });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error", success: false });
  }
};
export const getapplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant", options: { sort: { createdAt: -1 } } },
    });
    if (!job) {
      return res.status(404).json({ message: "job not found", success: false });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error", success: false });
  }
};

export const updatestatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "invalid status",
        success: false,
      });
    }
    const application = await Application.findByOne({_id: applicationId});
    if (!application) {
      return res
        .status(404)
        .json({ message: "application not found", success: false });
    }
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "application status updated",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error", success: false });
  }
};
