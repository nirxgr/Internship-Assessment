import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authMiddleware from "./middleware/authMiddleware.js";
import studentRouter from "./routes/studentRoutes.js";
import teacherRouter from "./routes/teacherRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import statsRouter from "./routes/statsRoutes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware);

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected and synchronized");

    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/stats", statsRouter);

startServer();
