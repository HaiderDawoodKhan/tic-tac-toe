import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/GameUser.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.json({mssg : "Welcome"})
})
app.use('/user',userRouter)
