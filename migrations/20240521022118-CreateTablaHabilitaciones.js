'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(
      'Habilitaciones',
     { id_chofer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_vehiculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
  },
     {
      sync: {force:true} //Forzar sincronicacion: definicion modelos  migracion y base datos
    }
    );


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Habilitaciones');
  }
};
