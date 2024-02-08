import express from 'express';
import bodyParser from 'body-parser';
import connect from './config/serverConfig.js';
import urlRoutes from './routes/index.js'

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/url', urlRoutes);

app.listen(PORT, async () => {
    console.log(`server running at ${PORT}`);
    connect();
    console.log('Successfully Contected');
})