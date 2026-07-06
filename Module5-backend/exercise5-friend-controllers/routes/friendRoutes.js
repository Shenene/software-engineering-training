const express = require("express");
const router = express.Router();

const friendController = require("../controllers/friendController");

// -------------------------------------------------------------- //

// Default endpoint, gets all friends
router.get("/", friendController.getAllFriends);

// Filter endpoint
router.get("/filter", friendController.filterFriends);

// Info endpoint
router.get("/info", friendController.getHeaderInfo);

// Dynamic ID endpoint
router.get("/:id", friendController.getFriendById);

// Add new friend
router.post("/", friendController.addFriend);

// Update existing friend
router.put("/:id", friendController.updateFriend);

// -------------------------------------------------------------- //

module.exports = router;
