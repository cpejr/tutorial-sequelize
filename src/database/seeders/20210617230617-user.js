"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Gustavo",
        lastName: "Gomes",
        email: "gustavogomes@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "João",
        lastName: "Rosmaninho",
        email: "joaorosmaninho@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Marcone",
        lastName: "Faria",
        email: "marconefaria@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Paulo",
        lastName: "Carellos",
        email: "paulocarellos@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Vitor",
        lastName: "Barros",
        email: "vitorbarros@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Vinicius",
        lastName: "Lara",
        email: "viniciuslara@cpejr.com.br",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const { Op } = Sequelize;
    await queryInterface.bulkDelete("Users", {
      email: {
        [Op.in]: [
          "gustavogomes@cpejr.com.br",
          "joaorosmaninho@cpejr.com.br",
          "paulocarellos@cpejr.com.br",
          "marconefaria@cpejr.com.br",
          "viniciuslara@cpejr.com.br",
          "vitorbarros@cpejr.com.br",
        ],
      },
    });
  },
};
