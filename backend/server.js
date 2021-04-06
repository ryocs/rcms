import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import MongoStore from 'connect-mongo'
import passport from './config/passport.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }), express.json());
/*app.use(
	session({
		secret: 'this-inzi-tiny-string',
		store: new MongoStore({ mongoUrl: "mongodb://127.0.0.1:27017/rcms" }),
		resave: false,
		saveUninitialized: false,
		cookie: {httpOnly: false}
	})
);*/


//app.use(passport.initialize());
app.use(passport.initialize());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Backend is running in ${process.env.NODE_ENV} mode on Port ${PORT}`));