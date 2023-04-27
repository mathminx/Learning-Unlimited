const { Tutor } = require('../model');

const tutorData = [
    {
        instructional_level: 'Bachelor of Arts',
        date_created: 'April 20, 2021 07:00:00',
        user_id: 1,
    },
    {
        instructional_level: 'Bachelor of Arts',
        date_created: 'June 22, 2021 09:00:00',
        user_id: 2,
    },
];

const seedTutor = () => Tutor.bulkCreate(tutorData);

module.exports = seedTutor;