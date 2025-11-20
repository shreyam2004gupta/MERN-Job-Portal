import express from "express";
import isAuthenticated from "../Middleware/isAuthenticated.js";
import { singleUpload } from "../Middleware/multer.js";
import {
  getAllCompanies,
  getcompany,
  registerCompany,
  upadtecompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getAllCompanies);
router.route("/get/:id").get(isAuthenticated, getcompany);
router.route("/update/:id").put(isAuthenticated, singleUpload, upadtecompany);

export default router;
