const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist/Actividad-Gato'));
app.get("/*",function(req, res){
    res.sendFile("index.html",{root: './dist/Actividad-Gato/'});
});

app.listen(process.env.PORT || 8080);
