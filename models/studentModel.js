import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Student = sequelize.define("Student", {
  name: { type: DataTypes.STRING, allowNull: false },
  classNumber: { type: DataTypes.STRING, allowNull: false },
  section: { type: DataTypes.STRING, allowNull: false },
  rollNumber: { type: DataTypes.INTEGER, allowNull: false },
  contactDetails: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/, // validation for exactly 10-digit phone number
    },
  },
});

export default Student;
