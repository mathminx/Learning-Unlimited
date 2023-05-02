const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Tutor = require('./Tutor');
const Student = require('./Student');

class StudentTutor extends Model {}

StudentTutor.init(
  {
    studenttutor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: 'student_id'
      }
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tutor,
        key: 'tutor_id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'studenttutor',
  }
);