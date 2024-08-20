import express from 'express'
import FetchQuestion from '../Controllers/Questions/FetchQuestions.js'


const GetQuestion = express.Router()

GetQuestion.get('/questions' , FetchQuestion )

export default GetQuestion