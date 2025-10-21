import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from"dotenv";
import connectDB from "./utils/db.js";
import useRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobsRouter from "./routes/job.routes.js";
import applicantionRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;

app.use("/api/user",useRouter);
app.use("/api/company",companyRouter);
app.use("/api/jobs",jobsRouter);
app.use("/api/application",applicantionRoute);
app.listen(PORT, () => {
    connectDB(),
  console.log(`Server is running at PORT ${PORT}`);
});
