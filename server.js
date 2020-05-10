const express = require('express')
const app = express()

var lmgtfy = require('./lmgtfy.js')

const port = 3002

app.use(express.static('public'))

app.listen(port, () => console.log(`App listening on port ${port}!`))

app.get('/healthcheck', (req, res) => res.send('Alive'))

app.get('/lmgtfy/:query', (req, res) => {
    const link = lmgtfy.getLMGTFYLink(req.params.query);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        text: link
    }));
})

app.post('/lmgtfy/slack', (req, res) => {
    const link = lmgtfy.getLMGTFYSlackLink(req.body.text);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        text: link
    }));
})
