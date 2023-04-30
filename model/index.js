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

Student.belongsToMany(Tutor, { through: 'StudentTutor'});

Tutor.belongsToMany(Student, { through: 'StudentTutor'});

Student.belongsToMany(Subject, { through: 'StudentSubject' });

Subject.belongsToMany(Student, { through: 'StudentSubject' });

Tutor.belongsToMany(Subject, { through: 'TutorSubject' });

Subject.belongsToMany(Tutor, { through: 'TutorSubject' });

module.exports = { Address, Student, Subject, Tutor, User };