import express from 'express';
import bodyParser from 'body-parser';
import {connect, PORT} from './config/serverConfig.js';
import urlRoutes from './routes/index.js'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/url', urlRoutes);

app.listen(PORT, async () => {
    console.log(`server running at ${PORT}`);
    connect();
    console.log('Successfully Contected');
})