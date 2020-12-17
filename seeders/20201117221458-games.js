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
          "name": "Super Mario World",
          "guid": "3030-1334",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Donkey Kong Country",
          "guid": "3030-15738",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Donkey Kong Country 2: Diddy's Kong Quest",
          "guid": "3030-16889",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Donkey Kong Country 3: Dixie Kong's Double Trouble!",
          "guid": "3030-4547",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Super Castlevania IV",
          "guid": "3030-11443",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Super Mario Kart",
          "guid": "3030-19071",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Mario Paint",
          "guid": "3030-8791",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Star Fox",
          "guid": "3030-3984",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "userId": "2",
          "name": "Killer Instinct",
          "guid": "3030-18484",
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