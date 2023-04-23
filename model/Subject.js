const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model {}

Subject.init(
    {
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        subject_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tutor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tutor_id',
                key: 'tutor_id',
            },
        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'student',
                key: 'student_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'subject',
    }
);

module.exports = Subject;