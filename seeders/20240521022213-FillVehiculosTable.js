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
    await queryInterface.bulkInsert('Vehiculos',
      [
          {id_vehiculo:2,patente:'AAA111',carga_util:10000,
          licencia_minima:'C3',en_uso:1},
          {id_vehiculo:4,patente:'BBB111',carga_util:1000,
          licencia_minima:'B2',en_uso:0},
          {id_vehiculo:44,patente:'CCC222',carga_util:11000,
          licencia_minima:'C1',en_uso:1},
          {id_vehiculo:12,patente:'DDD333',carga_util:40000,
          licencia_minima:'B1',en_uso:0},
          {id_vehiculo:6,patente:'EEE444',carga_util:5000,
          licencia_minima:'A1',en_uso:0}

      ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Vehiculos', null, {});
  }
};