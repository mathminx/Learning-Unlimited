const { Student } = require('../model');

const studentData = [
    {
        income_level: 30000,
        date_created: 'December 22, 2020 11:00:00',
        user_id: 3,

    },
    {
        income_level: 42000,
        date_created: 'September 23, 2021 08:30:00',
        user_id: 3,
    },
];

const seedStudent = () => Student.bulkCreate(studentData);

module.exports = seedStudent;