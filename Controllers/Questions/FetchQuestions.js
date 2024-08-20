import Question from "../../Models/Questions.js";

const FetchQuestion =  async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (err) {
      res.status(500).send(err);
    }
};

export default FetchQuestion