import express from 'express'
import fs from 'fs'
import {getAllPosts,getPostById,addPost} from './controllers.js';





export const router = express.Router();


router.get('/getAllPosts',getAllPosts)


router.get('/posts/:id',getPostById)

router.post('/add',addPost)










