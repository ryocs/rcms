import { getUsers, getUserById, createUser, logout} from "../controllers/userController.js";
import express from 'express'
import passport, { Passport } from "passport";
import { generateToken, authenticate, respond, serialize } from "./routeUtility.js";

const router = express.Router()

router.get('/loggedin', authenticate, (req, res) => {
	res.send(true);
});

router.post('/login', passport.authenticate(  
	'local', {
	  session: false
}), serialize, generateToken, respond);

router.get('/logout', authenticate, logout);
router.get('/', authenticate, getUsers);

router.route('/').post(createUser);
router.route('/:id').get(getUserById);
router.route('/:username').get(getUserById);

export default router