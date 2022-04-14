import { Model, DataTypes } from 'sequelize';
import db from '.';
import Call from './calls';

class User extends Model {
  public id?: number;

  public username: string;

  public email: string;

  public password: string;

}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
  underscored: true,
});

User.hasMany(Call, {foreignKey: 'userId', as: 'calls'});
Call.belongsTo(User, {foreignKey:'userId', targetKey: 'id', as:'users'})

export default User;
