import express from "express";
import {login,register,updateProfile,logout} from "../controllers/user.controller.js";
import authenticateToken from "../Middleware/isAuthenticated.js";
import {singleUpload} from "../Middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken, singleUpload,updateProfile);

export default router;
