'use strict'

const express = require('express');
const bodyParser = requrie('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
    console.log(
        'Express server listening on port %d in %s mode', 
        server.address().port,
        app.settings.env
    );
});

app.post('/', (req, res) => {
    let text = req.body.text;
    
    if (! /^\d+$/.test(q.text)) { // not a digit
        res.send('U R DOIN IT WRONG. Enter a status code like 200!');
        return;
    }

    let data = {
        response_type: 'in_channel', // public to the channel
        text: '302: Found',
        attachments:[{
            image_url: 'https://http.cat/302.jpg'
        }]
    };

    res.json(data)
})