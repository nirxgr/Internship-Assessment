import Student from "../models/studentModel.js";

// GET api to fetch all students with optional filtering
export const getAllStudents = async (req, res) => {
  try {
    const { classNumber, section } = req.query;
    const where = {};
    if (classNumber) where.classNumber = classNumber;
    if (section) where.section = section;

    const students = await Student.findAll({ where });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET api to fetch single student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST api to create new student
export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PATCH api to update existing student
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    await student.update(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE api to delete student
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    await student.destroy();
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
