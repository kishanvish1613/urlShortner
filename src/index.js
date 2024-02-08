import express from 'express';

const app = express();
const PORT = 3001;

app.listen(PORT, async () => {
    console.log(`server running at ${PORT}`);
})