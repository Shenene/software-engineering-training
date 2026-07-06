const friends = require("../models/friends");

// ------------------------------------------------------------------------------------------- //

const getAllFriends = (req, res) => {
  res.status(200).json(friends);
};

// -------------------------------------------------------------------------------------------

const filterFriends = (req, res) => {
  const filterGender = req.query.gender;
  const filterLetter = req.query.letter;

  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter((friend) => friend.gender === filterGender);
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) => friend.name.startsWith(filterLetter));
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends found matching the filter" });
  }
};

// -------------------------------------------------------------------------------------------

const getHeaderInfo = (req, res) => {
  const headerInfo = {
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers.accept,
  };

  res.status(200).json(headerInfo);
};

// -------------------------------------------------------------------------------------------

const getFriendById = (req, res) => {
  const friendId = Number(req.params.id);

  const matchedFriend = friends.find((friend) => friend.id === friendId);

  if (matchedFriend) {
    res.status(200).json(matchedFriend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

// -------------------------------------------------------------------------------------------

const addFriend = (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    res.status(400).json({ error: "Friend object must contain a name and gender" });
    return;
  }

  if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);

  res.status(201).json(newFriend);
};

// -------------------------------------------------------------------------------------------

const updateFriend = (req, res) => {
  const friendId = Number(req.params.id);
  const updatedFriend = req.body;

  const friendIndex = friends.findIndex((friend) => friend.id === friendId);

  if (friendIndex === -1) {
    res.status(404).json({ error: "Friend not found" });
    return;
  }

  if (!updatedFriend.name || !updatedFriend.gender) {
    res.status(400).json({ error: "Friend object must contain a name and gender" });
    return;
  }

  const friendToUpdate = {
    id: friendId,
    name: updatedFriend.name,
    gender: updatedFriend.gender,
  };

  friends[friendIndex] = friendToUpdate;

  res.status(200).json(friendToUpdate);
};

// ------------------------------------------------------------------------------------------- //

module.exports = {
  getAllFriends,
  filterFriends,
  getHeaderInfo,
  getFriendById,
  addFriend,
  updateFriend,
};
