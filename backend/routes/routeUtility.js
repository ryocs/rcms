import User from '../models/usersModel.js'
import {createSession} from '../controllers/sessionController.js'
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';

export const authenticate = expressJwt({secret: 'secysecysecret', algorithms: ['HS256']})

export const generateToken = (req, res, next) => {  
    req.token = jwt.sign({
      id: req.user.id,
    }, 'secysecysecret', {
      expiresIn: 60*30,
      algorithm: 'HS256'
    });
    next();
  }

export const respond = (req, res) => {  
    res.status(200).json({
      user: req.user,
      token: req.token
    });
}

export const serialize = (req, res, next) => {  
    console.log(req.user);
    createSession(req.user, user => {
        req.user = {
            id: user._id
        };
        next();
    });
}