'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'Vehiculos',
          {//estructura de tabla
            id_vehiculo: {
              type: Sequelize.INTEGER ,
              allowNull: false,
              primaryKey: true,//aca agregamos que esta es primaryKey
          },  
             patente:      Sequelize.STRING,  
             carga_util:    Sequelize.REAL,
             licencia_minima:    Sequelize.STRING,
             en_uso:        Sequelize.INTEGER,
         },
     {
      sync: {force:true} //Forzar sincronicacion: definicion modelos  migracion y base datos
    }
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('Vehiculos');
  }
};