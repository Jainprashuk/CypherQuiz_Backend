import cron from "node-cron";
import nodemailer from "nodemailer";
import Response from "./Models/ResponseModel.js";
import User from "./Models/Users.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "29jainprashuk@gmail.com",
    pass: "tasoojnmminhrgko",
  },
});

const correctAnswers = {
  1: "mongod",
  2: "MongoDB",
  3: "save()",
  4: "npm start",
  5: "Redux",
  6: "PUT",
  7: "3000",
  8: "app.get()",
  9: "npm install",
  10: "MongoDB"
};

const evaluateAndNotify = async () => {
  try {
    
    const responses = await Response.find({ cronjobdone: false });

    for (const response of responses) {
      let score = 0;

    // Evaluate answers
      response.answers.forEach((answer) => {
        if (correctAnswers[answer.q_id] === answer.selectedOption) {
          score++;
        }
      });

      // Update response with score and mark cronjobdone
      await Response.findByIdAndUpdate(response._id, {
        score,
        cronjobdone: true,
      });

      // Get user email from the User model
      const user = await User.findById(response.user);
      if (!user) continue;

      // Send email
      const mailOptions = {
        from: '29jainprashuk@gmail.com',
        to: user.email,
        subject: 'Your CypherQuiz Score',
        text: `Dear ${user.name} ,\n\nHope you Enjoyed taking the cypherquiz!🎉\n\nYour Score is : ${score} / ${Object.keys(correctAnswers).length} \n\nThank you for participating. If you have any questions or feedback, feel free to reach out to us. \n\n Best regards,\n The CypherQuiz Team`,
      };
      

      await transporter.sendMail(mailOptions);
    }

    console.log("Cron Job Evaluation and notifications completed.");
  } catch (error) {
    console.error("Error during evaluation and notification:", error);
  }
};

// cron.schedule("0 * * * *", evaluateAndNotify);    // 1 hour
cron.schedule('*/10 * * * * *', evaluateAndNotify);  // 10 sec

