import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";

//GET api to fetch dashboard details
export const getDashboard = async (req, res) => {
  try {
    const students = await Student.findAll();
    const teachers = await Teacher.findAll();

    //Counting students by class
    const studentCounts = {};
    students.forEach((student) => {
      const className = `${student.classNumber}${student.section}`;
      studentCounts[className] = (studentCounts[className] || 0) + 1;
    });

    //Getting subjects by class
    const classSubjects = {};
    teachers.forEach((teacher) => {
      let subjects;
      try {
        subjects = JSON.parse(teacher.subjects);
      } catch {
        subjects = [];
      }

      subjects.forEach((subjectInfo) => {
        subjectInfo.classes.forEach((className) => {
          if (!classSubjects[className]) {
            classSubjects[className] = [];
          }
          classSubjects[className].push({
            subject: subjectInfo.subject,
            teacher: teacher.name,
          });
        });
      });
    });

    //Combining everything
    const allClasses = new Set([
      ...Object.keys(studentCounts),
      ...Object.keys(classSubjects),
    ]);

    const result = Array.from(allClasses).map((className) => ({
      class: className,
      subjects: classSubjects[className] || [],
      total_students: studentCounts[className] || 0,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
