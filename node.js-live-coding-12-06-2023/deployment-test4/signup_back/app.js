import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
/* import User from './models/User.js'; */


import { addUser, getUser, getUsers } from './controllers/userController.js';

//APP INIT
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());





//ROUTES
app.get('/users',getUsers)
app.get('/users/:id', getUser)
app.post('/users/signup',addUser)


//START LISTENING ON PORT

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

 //CONNECT TO MONGO_DB

 mongoose.connect(process.env.DB_URI);

 mongoose.connection.on('error', console.error).on('open', () => {
   console.log(`Conntected to MongoDB / ${mongoose.connection.name}`);
 });
 