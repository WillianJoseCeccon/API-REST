'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [{
      name: 'Arthur',
      bio: 'I am a full stack javascript developer with experience on mern stack.',
      email: 'arthur123@gmail.com',
      phone: '1111-1111',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'willian',
      bio: 'I am a full stack javascript developer with experience on mern stack.',
      email: 'willian123@gmail.com',
      phone: '2222-1111',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {})
  }
};
