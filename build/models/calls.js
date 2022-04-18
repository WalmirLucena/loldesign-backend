"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Call extends sequelize_1.Model {
}
Call.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    origin: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    destiny: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    time: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    plan: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    priceWithPlan: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'calls',
    timestamps: false,
    underscored: true,
});
exports.default = Call;
//# sourceMappingURL=calls.js.map