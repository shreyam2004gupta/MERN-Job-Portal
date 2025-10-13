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
      return req.status(400).json({
        message: "please fill all the fields",
        success: false,
      });
    }
    job = await createImageBitmap({
      title,
      description,
      requirement: requirement.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      company: companyId,
      exprence_id: experience,
      create_by: userId,
    });
    return res
      .status(201)
      .json({ message: "job created successsfully", status: true, job });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error", status: false });
  }
};

export const getalljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $option: "i" } },
        { description: { $regex: keyword, $option: "i" } },
        { requirement: { $regex: keyword, $option: "i" } },
        { location: { $regex: keyword, $option: "i" } },
        { jobType: { $regex: keyword, $option: "i" } },
        { position: { $regex: keyword, $option: "i" } },
      ],
    };
    const jobs = await Job.find(query);
    if (!jobs) {
      return res.status(404).json({
        message: "no job found",
        status: false,
      });
    }
    return res.status(200).json({
      jobs,
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      status: false,
    });
  }
};

export const getjobid = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findbyId(jobid);
    if (!job) {
      return res.status(400).json({
        message: "job not found",
        status: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch {}
};


export const getadmin = async (req,res)=>{
    try{
     const adminId = req.id;
     const jobs = await Job.find({
        created_by:adminId
     });
     if(!jobs){
        return res.status(404).json({
            message:"no jobs found",
            status:false
        });
     }
     return res.status(200).json({
       jobs,
       status: true,
     });
    }catch{
        console.error(error);
        return res.status(500).json({
            message:"server error",
            success:false
        });
    }
}