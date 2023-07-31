import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Users } from "./userModels";
import { Category } from "./categoryModel";


export class Products extends Model {
  public id!: number;
  public owner_id!: number;
  public category_id!: number;
  public address_id!: number;
  public bidder_id!: number;
  public name!: string;
  public description!: string;
  public price!: bigint;
  public latestBid!:bigint
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },

    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    bidder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    latestBid: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "Products",
  }
);
