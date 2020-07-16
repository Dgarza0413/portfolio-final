const express = require('express');
const app = express();
const axios = require('axios');
const compression = require('compression');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.get("/api/github", (req, res) => {
//     axios.get("https://api.github.com/users/dgarza0413")
//         .then(res => res.data)
//         .catch(err => console.error(err))
// })

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})