import express from "express";
const router = express.Router();

import { login, signup, updateUserProfile} from "../controllers/user.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/about", updateUserProfile);

export default router;