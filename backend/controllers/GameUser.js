import { GameUser } from "../models/GameUser.js";
import bcrypt from "bcrypt";

export const createUser = async (req,res) => {
    try {
        const {name,username,password} = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = await GameUser.create({name : name,username : username,password : hash});
        return res.status(201).json({user});
    } catch (err) {
        return res.status(400).json({error : err.message});
    }
}

export const loginUser = async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await GameUser.findOne({username : username});

        if(user && bcrypt.compareSync(password, user.password)){
            return res.status(200).json({user});
        }
        
        return res.status(400).json({error : "Invalid username or password"});
    } catch (err) {
        return res.status(400).json({error : err.message});
    }
}