import { Router } from "express";
const router=Router()
import {signIn,signUp} 
from '../controllers/user.controller.js'


router.post("/signIn",signIn)
router.post("/signUp",signUp)

export default router