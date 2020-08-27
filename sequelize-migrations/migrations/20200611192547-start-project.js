'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: new Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: new Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: new Sequelize.INTEGER,
        allowNull: false
      },
      photo: { type: new Sequelize.STRING },
      video: { type: new Sequelize.STRING },
      description: { type: new Sequelize.STRING(1020) },
      phone: { type: new Sequelize.INTEGER },
      cep: { type: new Sequelize.INTEGER },
      street: { type: new Sequelize.STRING },
      streetNumber: { type: new Sequelize.INTEGER },
      addressComplement: { type: new Sequelize.STRING },
      city: { type: new Sequelize.STRING },
      state: { type: new Sequelize.STRING(2) },
      password: { type: Sequelize.STRING, allowNull: false },

      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
