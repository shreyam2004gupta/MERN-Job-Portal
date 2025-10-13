import express from "express";
import authenticateToken from "../Middleware/isAuthenticated.js";
import { getAllCompanies, getcompany, registerCompany, upadtecompany } from "../controllers/comany.controller.js";

const router = express.Router();

router.route("/register").post(authenticateToken,registerCompany);
router.route("/get").get(authenticateToken,getAllCompanies);
router.route("/get/:id").get(authenticateToken,getcompany);
router.route("/update/:id").put(authenticateToken,upadtecompany);

export default router;