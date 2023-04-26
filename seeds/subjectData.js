const { Subject } = require('../model');

const subjectData = [
    {
        subject_name: 'Grade 1 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 1 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 2 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 2 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 3 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 3 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 4 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 4 Math',
        subject_level: 'K-8',
    },{
        subject_name: 'Grade 5 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 5 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 6 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 6 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 7 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 7 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 8 Reading/Writing',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 8 Math',
        subject_level: 'K-8',
    },
    {
        subject_name: 'Grade 9 Reading/Writing',
        subject_level: '9-12',
    },
    {
        subject_name: 'Grade 10 Reading/Writing',
        subject_level: '9-12',
    },
    {
        subject_name: 'Grade 11 Reading/Writing',
        subject_level: '9-12',
    },
    {
        subject_name: 'Grade 12 Reading/Writing',
        subject_level: '9-12',
    },
    {
        subject_name: 'Financial and Workplace Mathematics 110',
        subject_level: '9-12',
    },
    {
        subject_name: 'Financial and Workplace Mathematics 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Foundations of Mathematics 110',
        subject_level: '9-12',
    },
    {
        subject_name: 'Foundations of Mathematics 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Geometry, Measurement and Finance 10',
        subject_level: '9-12',
    },
    {
        subject_name: 'Number, Relations and Functions 10',
        subject_level: '9-12',
    },
    {
        subject_name: 'Mathematics 9',
        subject_level: '9-12',
    },
    {
        subject_name: 'Pre-Calculus 110',
        subject_level: '9-12',
    },
    {
        subject_name: 'Pre-Calculus A 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Pre-Calculus B 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Calculus 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Introduction to Accounting 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'NBCC Skilled Trades and Work-Ready Math 120',
        subject_level: '9-12',
    },
    {
        subject_name: 'Chemistry 111/112',
        subject_level: '9-12',
    },
    {
        subject_name: 'Chemistry 121/122',
        subject_level: '9-12',
    },
    {
        subject_name: 'Biology 111/112',
        subject_level: '9-12',
    },
    {
        subject_name: 'Biology 121/122',
        subject_level: '9-12',
    },
    {
        subject_name: 'Science Grade 9',
        subject_level: '9-12',
    },
    {
        subject_name: 'Science Grade 10',
        subject_level: '9-12',
    },
    {
        subject_name: 'Physics 11',
        subject_level: '9-12',
    },
    {
        subject_name: 'Physics 12',
        subject_level: '9-12',
    },
    {
        subject_name: 'Physical Geography 110',
        subject_level: '9-12',
    },
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;