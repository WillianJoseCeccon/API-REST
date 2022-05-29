'use strict';

const { DATE } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    const [companies] = await queryInterface.Sequelize.query('select id from companies');

    await queryInterface.bulkInsert('jobs',[{
      title: 'Full-stack Javascript',
      description: 'descricao full stack',
      limit_date: '2022-03-31',
      company_id: companies[0].id,
      create_at: new DATE(),
      update_at: new DATE()
    },
    {
      title: 'Front-end Javascript',
      description: 'descricao full stack',
      limit_date: '2022-03-31',
      company_id: companies[1].id,
      create_at: new DATE(),
      update_at: new DATE()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDeete('jobs', null, {})
  }
};
