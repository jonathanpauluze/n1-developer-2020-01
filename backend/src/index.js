const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

// Routes
app.get('/products', (req, res) => {
  res.json([
    {
        "name": "Action figure Goku",
        "price": 200.90,
        "image": "./src/img/thumb_goku.jpg"
    },
    {
        "name": "Action figure Samus",
        "price": 120.80,
        "image": "./src/img/thumb_samus.jpg"
    },
    {
        "name": "Action figure Sub-zero",
        "price": 200.90,
        "image": "./src/img/thumb_subzero.jpg"
    },
    {
        "name": "Action figure Link",
        "price": 700.90,
        "image": "./src/img/thumb_link.jpg"
    }
  ])
})

// Port
app.listen(3333);