import User from '../models/usersModel.js';
import passport from 'passport';
import strategy from './localStrategy.js';

passport.serializeUser((user, done) => {
	console.log(user);
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'userName',
		(err, user) => done(null, user)
	)
})

passport.use(strategy);

export default passport