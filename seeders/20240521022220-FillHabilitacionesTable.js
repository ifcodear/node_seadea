'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Habilitaciones',
      [
          {id_chofer:1,id_vehiculo:2,},
          {id_chofer:1,id_vehiculo:4,},
          {id_chofer:1,id_vehiculo:12,},
          {id_chofer:3,id_vehiculo:6,},
          {id_chofer:9,id_vehiculo:2,}
      ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Habilitaciones', null, {});
  }
};