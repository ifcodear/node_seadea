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
     await queryInterface.bulkInsert('Choferes',
      [
          {id_chofer: 1,nombre:'Juan',apellido:'Fangio',
          dni:'111111',licencia:'D4',edad:120},
          {id_chofer: 3,nombre:'Ayrton',apellido:'Senna',
          dni:'222222',licencia:'C2',edad:60},
          {id_chofer: 5,nombre:'Juan',apellido:'Galvez',
          dni:'333333',licencia:'B2',edad:150},
          {id_chofer: 9,nombre:'Mikka',apellido:'Hakinnen',
          dni:'444444',licencia:'C3',edad:40},
          {id_chofer: 8,nombre:'Kimmi',apellido:'Raikonnen',
          dni:'555555',licencia:'D4',edad:50}

      ],{}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Choferes', null, {});
  }
};