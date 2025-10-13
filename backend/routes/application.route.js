import express from "express";
import authenticateToken from "../Middleware/isAuthenticated.js";
import { applyjob, getapplicants, getAppliedJob, updatestatus } from "../controllers/application.controller.js";


const router = express.Router();

router.route("/apply/:id").get(authenticateToken,applyjob);
router.route("/get").get(authenticateToken,getAppliedJob);
router.route("/:id/applicants").get(authenticateToken,getapplicants);
router.route("/status/:id/update").post(authenticateToken,updatestatus);

export default router;