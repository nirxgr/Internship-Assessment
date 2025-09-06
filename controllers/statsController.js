import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";

export const getStats = async (req, res) => {
  try {
    const students = await Student.findAll();
    const teachers = await Teacher.findAll();

    const totalStudents = students.length;
    const totalTeachers = teachers.length;

    // Count students per class
    const classCounts = {};
    students.forEach((student) => {
      const className = `${student.classNumber}${student.section}`;
      classCounts[className] = (classCounts[className] || 0) + 1;
    });

    // Average class size
    const totalClasses = Object.keys(classCounts).length;
    const avgClassSize =
      totalClasses > 0
        ? Math.round((totalStudents / totalClasses) * 100) / 100
        : 0;

    // Subjects count
    const subjectCounts = {};
    teachers.forEach((teacher) => {
      const subjects = JSON.parse(teacher.subjects);

      subjects.forEach((subjectInfo) => {
        const subject = subjectInfo.subject;
        subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
      });
    });

    // Find most popular subject
    let mostPopularSubject = null;
    let maxCount = 0;
    for (const [subject, count] of Object.entries(subjectCounts)) {
      if (count > maxCount) {
        maxCount = count;
        mostPopularSubject = subject;
      }
    }

    res.json({
      totalStudents,
      totalTeachers,
      avgClassSize,
      mostPopularSubject,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
