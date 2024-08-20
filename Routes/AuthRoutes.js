import express from 'express'
import Signup from '../Controllers/Auth/Signup.js'
import Login from '../Controllers/Auth/Login.js'
import Logout from '../Controllers/Auth/Logout.js'

const authrouter = express.Router()

authrouter.post('/signup' , Signup )
authrouter.post('/login' , Login )
authrouter.post('/logout' , Logout )

export default authrouter