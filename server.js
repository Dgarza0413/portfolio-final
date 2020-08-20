require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const compression = require('compression');
const PORT = process.env.PORT || 3001;

const occupations = require('./data/occupations');
const projects = require('./data/projects');
const skills = require('./data/skills');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "client/build"));
}


app.get("/api/github", async (req, res) => {
    console.log(req)
    try {
        const branch = await axios.get("https://api.github.com/repos/dgarza0413/engauge/branches/master", {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        })
        const tree = await axios.get(`https://api.github.com/repos/dgarza0413/engauge/git/trees/${branch.data.commit.sha}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        })
        await res.json(tree.data)
    } catch (error) {
        console.error(error)
    }
})

app.get('/api/project/:id', async (req, res) => {
    return res.json(occupations)
})



app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})