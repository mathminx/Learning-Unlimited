const sequelize =require('../config/connection');
const seedUser = require('./userData');
const seedAddress =require('./addressData');
const seedStudent = require('./studentData');
const seedTutor = require('./tutorData')




const seedAll = async ()=> {

    await sequelize.sync({ force: true});

    await seedUser();

    await seedAddress();

    await seedStudent();

    await seedTutor();


};

seedAll();