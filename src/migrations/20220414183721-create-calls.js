'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
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
      plan: {
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price_with_plan: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('calls');
  }
};