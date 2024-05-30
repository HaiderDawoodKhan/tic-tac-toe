import express from 'express';
import { createUser, loginUser } from '../controllers/GameUser.js'

export const userRouter = express.Router();

userRouter.post('/create',createUser);
userRouter.post('/login',loginUser);