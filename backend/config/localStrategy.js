import User from '../models/usersModel.js';
import LocalStrategy from 'passport-local';
import jwt from 'jsonwebtoken';

const strategy = new LocalStrategy(
	{
        usernameField: 'userName'
      }, (username, password, done) => {
        User.findOne({$or: [{userName: username}, {email: username}] }, (err, user) => {
			if (err) {
				return done(err)
			}
			console.log(username, password);
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
    }
)
export default strategy;

