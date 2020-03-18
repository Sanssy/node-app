const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('hey world');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
