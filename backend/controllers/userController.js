import User from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'
import passport from 'passport';

export const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    console.log(req.session);
    res.json(users)
});

export const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        res.json(user)
    } else {
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
});

export const getUserByUserName = asyncHandler(async(req, res) => {
    const user = await User.find({userName: req.params.userName})

    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
});

export const createUser = asyncHandler(async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send({user});
    } catch (e) {
        res.status(400).send(e);
    }
});

export const logout = asyncHandler(async(req, res) => {
    if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid')
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
});