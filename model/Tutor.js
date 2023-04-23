const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init(
    {
        tutor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructional_level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        subject_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subject',
                key: 'subjet_id',
            },
        },
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'student',
                key: 'student_id',
            },
        },
        address_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'address',
                key: 'address_id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Tutor;