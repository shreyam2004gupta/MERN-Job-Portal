import express from "express";
import {login,register,updateProfile,logout} from "../controllers/user.controller.js";
import authenticateToken from "../Middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post( register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken, updateProfile);

export default router;
