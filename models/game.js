'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.game.belongsToMany(models.user, {through:  'user_game'})
    }
  };
  game.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};
