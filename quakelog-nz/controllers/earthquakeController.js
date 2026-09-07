"use strict";

// -------------------------------------------------------- //
// ⁡⁣⁡⁣⁡⁣⁢⁢earthquakeController.js⁡⁡⁡⁡
// -------------------------------------------------------- //

import Earthquake from "../models/Earthquake.js";
import { fetchGeoNetEarthquakes } from "../services/geonetService.js";

import { Op } from "sequelize";

// ----------------------------------------------------- //
// POST - Import GeoNet earthquakes
// ----------------------------------------------------- //
const importEarthquakes = async (req, res) => {
  try {
    const geonetEarthquakes = await fetchGeoNetEarthquakes();

    let importedCount = 0;
    let updatedCount = 0;

    for (const earthquakeData of geonetEarthquakes) {
      const existingEarthquake = await Earthquake.findOne({
        where: {
          publicId: earthquakeData.publicId,
        },
      });

      if (existingEarthquake) {
        await existingEarthquake.update({
          eventTime: earthquakeData.eventTime,
          depthKm: earthquakeData.depthKm,
          magnitude: earthquakeData.magnitude,
          mmi: earthquakeData.mmi,
          quality: earthquakeData.quality,
          latitude: earthquakeData.latitude,
          longitude: earthquakeData.longitude,
        });

        updatedCount++;
      } else {
        await Earthquake.create(earthquakeData);

        importedCount++;
      }
    }

    res.status(200).json({
      message: "GeoNet earthquake import completed successfully.",
      importedCount,
      updatedCount,
      totalReceived: geonetEarthquakes.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to import GeoNet earthquakes.",
      error: error.message,
    });
  }
};

// ----------------------------------------------------- //
// POST - Create one earthquake (adding this for course requirements)
// ----------------------------------------------------- //
const createEarthquake = async (req, res) => {
  try {
    const { publicId, eventTime, depthKm, magnitude, mmi, locality, quality, latitude, longitude, reviewStatus, notes } = req.body;

    if (!publicId || !eventTime || depthKm === undefined || magnitude === undefined || !locality || !quality || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        message: "Missing required earthquake fields.",
      });
    }

    const existingEarthquake = await Earthquake.findOne({
      where: {
        publicId,
      },
    });

    if (existingEarthquake) {
      return res.status(409).json({
        message: "An earthquake with this publicId already exists.",
      });
    }

    const earthquake = await Earthquake.create({
      publicId,
      eventTime,
      depthKm,
      magnitude,
      mmi,
      locality,
      quality,
      latitude,
      longitude,
      reviewStatus,
      notes,
    });

    res.status(200).json({
      message: "Earthquake created successfully",
      earthquake,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to create earthquake.",
      error: error.message,
    });
  }
};
// ⁡⁣⁢⁢--------------------------------------------------------------------------------------------------⁡ //

// ----------------------------------------------------- //
// GET - GET all earthquakes
// ----------------------------------------------------- //
const getAllEarthquakes = async (req, res) => {
  try {
    const earthquakes = await Earthquake.findAll({
      order: [["eventTime", "DESC"]],
    });

    res.status(200).json(earthquakes);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve earthquakes",
      error: error.message,
    });
  }
};

// ----------------------------------------------------- //
// GET - GET earthquake summary
// ----------------------------------------------------- //
const getEarthquakeSummary = async (req, res) => {
  try {
    const earthquakes = await Earthquake.findAll({
      where: {
        quality: {
          [Op.ne]: "deleted",
        },
      },
    });

    const totalEarthquakes = earthquakes.length;

    if (totalEarthquakes === 0) {
      return res.status(200).json({
        totalEarthquakes: 0,
        averageMagnitude: 0,
        strongestEarthquake: null,
        reviewSummary: {
          unreviewed: 0,
          reviewed: 0,
          needsAttention: 0,
        },
      });
    }

    const totalMagnitude = earthquakes.reduce((total, earthquake) => total + Number(earthquake.magnitude), 0);

    const averageMagnitude = Number((totalMagnitude / totalEarthquakes).toFixed(2));

    // --------------------

    const strongestEarthquake = earthquakes.reduce((strongest, earthquake) => (earthquake.magnitude > strongest.magnitude ? earthquake : strongest));

    // --------------------

    const unreviewedCount = earthquakes.filter((earthquake) => earthquake.reviewStatus === "unreviewed").length;

    const reviewedCount = earthquakes.filter((earthquake) => earthquake.reviewStatus == "reviewed").length;

    const needsAttentionCount = earthquakes.filter((earthquake) => earthquake.reviewStatus === "needs_attention").length;

    // ---------------------------------------

    res.status(200).json({
      totalEarthquakes,
      averageMagnitude,

      strongestEarthquake: {
        id: strongestEarthquake.id,
        publicid: strongestEarthquake.publicId,
        magnitude: strongestEarthquake.magnitude,
        locality: strongestEarthquake.locality,
        eventTime: strongestEarthquake.evenTime,
      },

      reviewSummary: {
        unreviewed: unreviewedCount,
        reviewed: reviewedCount,
        needsAttention: needsAttentionCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to generate earthquake summary.",
      error: error.message,
    });
  }
};

// ----------------------------------------------------- //
// GET - GET earthquake by ID
// ----------------------------------------------------- //
const getEarthquakesById = async (req, res) => {
  try {
    const earthquake = await Earthquake.findByPk(req.params.id);

    if (!earthquake) {
      return res.status(404).json({
        message: "Earthquake not found.",
      });
    }

    res.status(200).json(earthquake);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve earthquake.",
      error: error.message,
    });
  }
};

// ⁡⁣⁢⁢--------------------------------------------------------------------------------------------------⁡ //

// ----------------------------------------------------- //
// PUT - Update review status and notes
// ----------------------------------------------------- //

const updateEarthquake = async (req, res) => {
  try {
    const earthquake = await Earthquake.findByPk(req.params.id);

    if (!earthquake) {
      return res.status(404).json({
        message: "Earthquake not found.",
      });
    }

    const { reviewStatus, notes } = req.body;

    if (reviewStatus === undefined && notes === undefined) {
      return res.status(400).json({
        message: "Provide reviewStatus or notes to update.",
      });
    }

    const allowedReviewStatus = ["unreviewed", "reviewed", "needs_attention"];

    if (reviewStatus !== undefined && !allowedReviewStatus.includes(reviewStatus)) {
      return res.status(400).json({
        message: "reviewStatus must be unreviewed, reviewed, or needs_attention.",
      });
    }
    if (reviewStatus !== undefined) {
      earthquake.reviewStatus = reviewStatus;
    }

    if (notes !== undefined) {
      earthquake.notes = notes;
    }

    await earthquake.save();

    res.status(200).json({
      message: "Earthquake updated successfully.",
      earthquake,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to update earthquake.",
      error: error.message,
    });
  }
};

// ⁡⁣⁢⁢--------------------------------------------------------------------------------------------------⁡ //

// ----------------------------------------------------- //
// DELETE - Delete one earthquake
// ----------------------------------------------------- //
const deleteEarthquake = async (req, res) => {
  try {
    const earthquake = await Earthquake.findByPk(req.params.id);

    if (!earthquake) {
      return res.status(404).json({
        message: "Earthquake not found.",
      });
    }

    const deletedId = earthquake.id;
    const deletedPublicId = earthquake.publicId;

    await earthquake.destroy();

    res.status(200).json({
      message: "Earthquake deleted successfully.",
      deletedId,
      pulicId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete earthquake.",
      error: error.message,
    });
  }
};

// ----------------------------------------------------- //

export { importEarthquakes, createEarthquake, getAllEarthquakes, getEarthquakeSummary, getEarthquakesById, updateEarthquake, deleteEarthquake };
