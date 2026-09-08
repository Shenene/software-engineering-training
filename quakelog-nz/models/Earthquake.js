"use strict";

// -------------------------------------------------------- //
// ⁡⁣⁢⁣Earthquake.js⁡⁡
// -------------------------------------------------------- //

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// ----------------------------------------------------- //

const Earthquake = sequelize.define(
  "Earthquake",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    publicId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    eventTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    depthKm: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    magnitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    mmi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    locality: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quality: {
      type: DataTypes.ENUM("best", "preliminary", "automatic", "deleted"),
      allowNull: false,
    },

    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    reviewStatus: {
      type: DataTypes.ENUM("unreviewed", "reviewed", "needs_attention"),
      allowNull: false,
      defaultValue: "unreviewed",
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "earthquakes",
    timeStamps: true,
  },
);

// ----------------------------------------------------- //

export default Earthquake;
