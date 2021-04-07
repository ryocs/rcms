import { getUsers, getUserById, createUser, logout, getUserByUserName} from "../controllers/userController.js";
import express from 'express'
import passport, { Passport } from "passport";
import { generateToken, authenticate, respond, serialize, deserialize } from "./routeUtility.js";

const router = express.Router()

router.get('/loggedin', (req, res) => {
	res.send(authenticate);
});

router.post('/login', passport.authenticate(  
	'local', {
	  session: false
}), serialize, generateToken, respond);

router.get('/logout', authenticate, deserialize, logout);
router.get('/', authenticate, getUsers);

router.post('/', createUser);
router.get('/:id', authenticate, getUserById);
router.get('/:username', authenticate, getUserByUserName);

export default router