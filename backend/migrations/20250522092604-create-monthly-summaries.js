'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('monthly_summaries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      month: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      year: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      total_income: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_expense: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      balance: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ai_summary: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      ai_recomendation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('monthly_summaries');
  },
};
