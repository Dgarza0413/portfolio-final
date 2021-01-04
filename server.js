require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const compression = require('compression');
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "client/build"));
}

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})