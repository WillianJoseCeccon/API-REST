'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{
      name: 'Nubank',
      bio: 'bio do nubank...',
      website: 'https://nubank.com.br',
      email: 'email@nubank.com.br',
      created_at: new DATE(),
      updated_at: new DATE()

    },
    {
      name: 'Magazine Luiza',
      bio: 'bio da Magazine luiza...',
      website: 'https://Magazine.com.br',
      email: 'email@magazinelujiza.com.br',
      created_at: new DATE(),
      updated_at: new DATE()

    },
    {
      name: 'OneBitCode',
      bio: 'bio do OneBitCode...',
      website: 'https://OneBitCode.com.br',
      email: 'email@OneBitCode.com.br',
      created_at: new DATE(),
      updated_at: new DATE()

    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDeete('companies', null, {})
  }
};
