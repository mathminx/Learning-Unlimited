const { Address } = require('../model');

const addressData = [
    {
        street_number: 123,
        appt_number: 2,
        street_name: 'Main Ave',
        city: 'Fredericton',
        postal_code: 'A1A 2B2',
        user_id: 1,
    },
    {
        street_number: 456,
        street_name: 'Center St W',
        city: 'Sussex',
        postal_code: 'A2B 3C2',
        user_id: 2,
    },
    {
        street_number: 987,
        appt_number: 405,
        street_name: 'Outerbanks Rd',
        city: 'Edmonston',
        postal_code: 'E3E 0A0',
        user_id: 3,
    },
    {
        street_number: 34,
        street_name: 'Ashgrove Ave',
        city: 'Saint John',
        postal_code: 'P2X 9K6',
        user_id: 4,
    },
];

const seedAddress = () => Address.bulkCreate(addressData);

module.exports = seedAddress;