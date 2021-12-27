const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET} = require("./config/config");

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}`;
const app = express();
const port = process.env.PORT || 3000;

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

mongoose.connect(mongoURL)
    .then(() => console.log('Successfully connected to DB'))
    .catch((error) => console.log(error))

app.use(express.json());
app.enable('trust proxy');
app.use(cors({}));

app.get('/api/v1', (req, res) => {
   res.send('<h1>Hi there</h1>');
   console.log('yeah it ran');
});

app.use("/api/v1/post", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
