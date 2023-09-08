const Question = require("../models/question");
const Option = require("../models/option");

const questionController = {
    createQuestion:async (req, res) => {
        try {
          const { question } = req.body;
          const newQuestion = await Question.create({ question });
          res.status(201).json(newQuestion);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating question' });
        }
    },
    createOption:async (req, res) => {
        try {
          const { option } = req.body;
          const id = parseInt(req.params.id);
          const question = await Question.findByPk(id);
          if (!question) {
            res.status(404).json({ error: 'Question not found' });
          } else {
            const newOption = await Option.create({ option, question_id: id });
            res.status(201).json(newOption);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating option' });
        }
    },
    viewQuestion:async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          
          // Fetch the question
          let question = await Question.findByPk(id);
          
          if (!question) {
            res.status(404).json({ error: 'Question not found' });
            return;
          }
    
          question = {
            "id" : question["id"],
            "title" : question["question"]
          };
          
          // Fetch associated options using the Option model
          let options = await Option.findAll({
            where: { question_id: id },
            order: [['id','ASC']]
          });
    
          options = options.map((option)=>{
            return {
                "id":option["id"],
                "text":option["option"],
                "votes":option["votes"],
                "link_to_vote":`http://localhost:3000/options/${option["id"]}/add_vote`
            }
          });
    
          question["options"] = options;
          
          res.status(200).json(question);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error fetching question' });
        }
    },
    deleteQuesion:async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          // Fetch the question
          let question = await Question.findByPk(id);
      
          if (!question) {
            res.status(404).json({ error: 'Question not found' });
          } else {
    
            // Fetch associated options using the Option model
            let options = await Option.findAll({
                where: { question_id: id },
            });
    
            options = options.map((option)=>{
                return {
                    "option_id":option["id"],
                    "option":option["option"],
                    "votes":option["votes"]
                }
            });
    
            // Check if all options have zero votes
            const allOptionsHaveZeroVotes = options.every((option) => option.votes === 0);
      
            if (allOptionsHaveZeroVotes) {
              await Option.destroy({ where: { question_id: id } });
              await Question.destroy({ where: { id } });
              res.status(200).json({"message":"Question deleted successfully."});
            } else {
              res.status(400).json({ error: 'Votes for some options are not zero' });
            }
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error deleting question' });
        }
    }
};

module.exports = questionController;