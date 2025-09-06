import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Teacher = sequelize.define("Teacher", {
  name: { type: DataTypes.STRING, allowNull: false },
  subjects: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  contactDetails: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      //for 10 digit phone number
      is: /^[0-9]{10}$/,
    },
  },
});

export default Teacher;

/*
As this is a small demo project, I have Used JSON to store multiple subjects with classes per teacher for simplicity as stated by the business rule given in hte question. 
Example:
    [
      { subject: "Math", classes: ["1A","2B"] },
      { subject: "Science", classes: ["3C"] }
    ]
But in a production environment, a normalized join table would be preferred for easier querying and scalability.
 */
