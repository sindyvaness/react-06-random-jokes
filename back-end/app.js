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


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});




