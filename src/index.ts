import express from 'express';

const app = express();

const PORT  = process.env.PORT || 3200;

app.listen(PORT, () => {
    console.log("Hi, I am Ready to start my server, cool!");
});