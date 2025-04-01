const express = require('express');
const app = express();

app.use(express.json());

app.post('/playlists', (req, res) => {
    res.status(200)
                .send("success");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

