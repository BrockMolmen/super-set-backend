'use strict';
const bcrypt = require('bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.belongsToMany(models.game, {through:  'user_game'})
    }
  validPassword(passwordTyped) {
    return bcrypt.compareSync(passwordTyped, this.password);
  };

    // remove the password before serializing
    toJSON() {
      let userData = this.get();
      delete userData.password;
      return userData;
    }
  }
  
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  user.beforeCreate((pendingUser, options) => {
    if (pendingUser && pendingUser.password) {
      // hash the password
      let hash = bcrypt.hashSync(pendingUser.password, 12);
      // store the hash as the user's password
      pendingUser.password = hash;
    }
  })
  return user;
};