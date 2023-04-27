const { User } = require('../model');

const userData = [
    {
        first_name: 'John',
        last_name: 'Smith',
        email: 'jsmith@email.com',
        password: 'password123',
    },
    {
        first_name: 'Jane',
        last_name: 'Brown',
        email: 'jbrown@email.com',
        password: 'password123',
    },
    {
        first_name: 'Jack',
        last_name: 'Black',
        email: 'jblack@email.com',
        password: 'password123',
    },
    {
        first_name: 'Susan',
        last_name: 'Green',
        email: 'sgreen@email.com',
        password: 'password123',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;