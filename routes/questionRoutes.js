const express = require('express');
const router = express.Router();
const questionController = require("../controllers/questionController");

// Create a question
router.post('/create', questionController.createQuestion);
  
// Create an option for a specific question
router.post('/:id/options/create', questionController.createOption);
  
// View a question with its options
router.get('/:id', questionController.viewQuestion);
  
// Delete a question if votes for all its options are zero
router.delete('/:id/delete', questionController.deleteQuesion);

module.exports = router;