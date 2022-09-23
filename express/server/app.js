const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


app.use(express.static(DIST_DIR))


app.get('/message', (req, res) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.json(`It's ${days[new Date().getDay()]} - time to make a React App!`)
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})


app.listen(PORT, () => console.log(`App listening on ${PORT}`))