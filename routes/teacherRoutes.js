import express from "express";
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/", getAllTeachers);
teacherRouter.get("/:id", getTeacherById);
teacherRouter.post("/", createTeacher);
teacherRouter.patch("/:id", updateTeacher);
teacherRouter.delete("/:id", deleteTeacher);

export default teacherRouter;
