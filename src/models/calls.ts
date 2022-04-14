import { Model, DataTypes } from 'sequelize';
import db from '.';

class Call extends Model {
  public userId: number;
  public origin: number;
  public destiny: number;
  public time: number;
  public plan?: number;
  public price: number;
  public priceWithPlan: number;

}

Call.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  origin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destiny: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plan: {
    type: DataTypes.NUMBER,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull:false,
  },
  priceWithPlan:{
    type: DataTypes.NUMBER,
    allowNull:false,
  }
}, {
  sequelize: db,
  modelName: 'calls',
  timestamps: false,
  underscored: true,
});

export default Call;
