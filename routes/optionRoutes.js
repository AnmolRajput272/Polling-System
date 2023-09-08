const express = require('express');
const router = express.Router();
const optionController = require("../controllers/optionController");

// Delete an option only if its votes are zero
router.delete('/:id/delete', optionController.deleteOption);
  
// Increment the count of votes for an option
router.get('/:id/add_vote', optionController.addVoteToOption);

module.exports = router;