import express from "express";

import authenticateToken from "../Middleware/isAuthenticated.js";
import { getadmin, getalljobs, getjobid, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(authenticateToken, postJob);
router.route("/get").get(authenticateToken, getalljobs);
router.route("/getadminjobs").get(authenticateToken, getadmin);
router.route("/get/:id").put(authenticateToken, getjobid);

export default router;
