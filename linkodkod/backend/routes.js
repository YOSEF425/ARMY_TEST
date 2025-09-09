import express from 'express'
import fs from 'fs'
import {sayHello,getAllPosts,getPostById} from './controllers.js';





export const router = express.Router();


router.get('/getAllPosts',getAllPosts)

router.get('/hello',sayHello)

router.get('/posts/:id',getPostById)










