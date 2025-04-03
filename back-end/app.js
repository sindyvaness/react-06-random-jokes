const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

app.locals = [];

app.use(express.json());

app.post('/playlists', (req, res) => {
    app.locals.push({
        "id": (app.locals.length + 1) ,
        "name": req.body.name,
        "jokes": []
    });

    res.status(200)
                .send(req.body);
});

app.get('/playlists', (req, res) => {
    res.status(200)
                .send(app.locals);
});

app.patch('/playlists/:listName', (req, res) => {
    const { listName } = req.params;
    const { newJoke } = req.body;

    // res.status(200)
    //         .json(newJoke);

    const playlist = app.locals.find(list => list.name === listName);

    if (playlist) {
        if (newJoke) {
            playlist.jokes.push(newJoke);

            res.status(200)
            .json({ message: "Playlist updated" });
        }
    }
    else {
        res.status(404)
        .json({ message: "Playlist no encontrada" });
    }
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});




