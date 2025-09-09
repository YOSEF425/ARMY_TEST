import express from 'express'
import fs from 'fs'
import {sayHello,getAllPosts} from './controllers.js';





export const router = express.Router();


router.get('/getAllPosts',getAllPosts)

router.get('/hello',sayHello)










