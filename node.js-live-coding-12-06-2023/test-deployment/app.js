import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js';
/* 

import { addUser, getUser, getUsers } from './controllers/userControllers.js'; */

//APP INIT
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());





//ROUTES
app.get('/',(req,res)=>{
  res.send(`<h1>We just deployed out backend!</h1>`)
})


//START LISTENING ON PORT

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

 //CONNECT TO MONGO_DB

 mongoose.connect(process.env.DB_URI);

 mongoose.connection.on('error', console.error).on('open', () => {
   console.log('Connected to DB');
 });
 

