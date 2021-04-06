import Session from '../models/sessionsModel.js';

export const createSession = (user,callback) => {
    Session.create({
        _id: user._id
    }, callback(user));
}