import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import routerIndex from './routes/index.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', routerIndex);

app.listen(3000, () => { console.log('Express server started.')});