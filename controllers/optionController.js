const Option = require("../models/option");

const optionController = {
    deleteOption:async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          const option = await Option.findByPk(id);
      
          if (!option) {
            res.status(404).json({ error: 'Option not found' });
          } else if (option.votes === 0) {
            await Option.destroy({ where: { id } });
            res.status(200).json({"message":"option deleted successfully."});
          } else {
            res.status(400).json({ error: 'Option has votes and cannot be deleted' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error deleting option' });
        }
    },
    addVoteToOption:async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          const option = await Option.findByPk(id);
          if (!option) {
            res.status(404).json({ error: 'Option not found' });
          } else {
            option.votes += 1;
            await option.save();
            res.status(200).json({"message":`vote added to option : ${option["option"]} sucessfully.`});
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error adding vote' });
        }
    }
};

module.exports = optionController;