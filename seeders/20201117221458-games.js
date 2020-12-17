'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('games', [
        {
          "userId": "2",
          "name": "The Legend of Zelda: A Link to the Past",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Teenage Mutant Ninja Turtles: Turtles in Time",
          "guid": "3030-18034",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "",
          "guid": "3030-10276",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
        
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};