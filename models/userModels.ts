import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Products } from "./productModel";

enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
}

export class Users extends Model {
  public id!: number;
  public first_Name!: string;
  public last_Name!: string;
  public email!: string;
  public password!: string;
  public status!: StatusEnum;
  public profilePic!: Blob;
  public phone_number!: string;
  public gender!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    first_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(StatusEnum.Active, StatusEnum.Inactive),
      allowNull: false,
    },

    profilePic: {
      type: DataTypes.BLOB,
      allowNull: false,
    },

    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    
  },

  {
    sequelize,
    modelName: "Users",
  }
);

Users.hasMany(Products, { foreignKey: "owner_id", as: "owner" });
Products.belongsTo(Users, { foreignKey: "owner_id", as: "owner" });

Users.hasMany(Products, { foreignKey: "bidder_id", as: "bidderProducts" });
Products.belongsTo(Users, { foreignKey: "bidder_id", as: "bidder" });


