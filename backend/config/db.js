import mongoose from 'mongoose'
import User from '../models/usersModel.js';
import Session from '../models/sessionsModel.js';

mongoose.Promise = global.Promise;

const databaseName='rcms';
const uri = `mongodb://127.0.0.1:27017/${databaseName}`;

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
    },
    err => {
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
);

export default mongoose.connection;