'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Choferes',
       {//estructura de tabla
        id_chofer:   {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,//aca agregamos que esta es primaryKey
      },
         nombre:      Sequelize.STRING,  
         apellido:    Sequelize.STRING,
         dni:         Sequelize.STRING,
         licencia:    Sequelize.STRING,
         edad:        Sequelize.INTEGER,
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

    await queryInterface.dropTable('Choferes');

  }
};
