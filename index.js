const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { numbers: [] });
})

app.post('/rows', (req, res) => {
    const divs = parseInt(req.body.quantity);

        if (isNaN(divs) || divs <= 0) {
        return res.redirect('/');
    }

    const numbers = Array.from({length: divs}, (_, i) => i + 1);

    res.render('index', { numbers });

})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));