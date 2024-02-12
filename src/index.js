import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {connect, PORT} from './config/serverConfig.js';

// routes
import urlRoutes from './routes/index.js'
import staticRoute from './routes/staticRouter.js'
import userRoute from './routes/userAuthRouter.js'

const app = express();


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', staticRoute);
app.use('/user', userRoute);
app.use('/url', urlRoutes);



app.listen(PORT, async () => {
    console.log(`server running at ${PORT}`);
    connect();
    console.log('Successfully Contected');
})