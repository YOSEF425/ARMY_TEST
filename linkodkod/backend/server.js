import express from 'express'
import {router} from './routes.js'
import cors from 'cors'


const app = express();



app.use(express.json());

app.use('/', router);         // server directs to router

app.use(cors());

app.use(express.static('public'));



app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});