'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calls', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      origin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      destiny: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      plane: {
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      priceWithPlan: {
        allowNull: false,
        type: Sequelize.NUMBER,
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Calls');
  }
};