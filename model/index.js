const User = require('./User');
const Address = require('./Address');
const Tutor = require('./Tutor');
const Student = require('./Student');
const Subject = require('./Subject');

User.hasOne(Address, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Address.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Tutor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Tutor.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Student, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Student.belongsTo(User, {
    foreignKey: 'user_id'
});

Tutor.hasMany(Student, {
    foreignKey: 'tutor_id',
    OnDelete: 'CASCADE',
});

Student.belongsTo(Tutor, {
    foreignKey: 'tutor_id',
});

Student.hasMany(Tutor, {
    foreignKey: 'student_id',
    OnDelete: 'CASCADE'
});

Tutor.belongsTo(Student, {
    foreignKey: 'student_id',
});

module.exports = { User, Address, Tutor, Student, Subject };