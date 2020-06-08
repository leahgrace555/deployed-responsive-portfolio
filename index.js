'use strict';

const express = require('express')
const app = express()
require('dotenv').config();

app.use(express.static('./Public'))

app.get('/', function (req, res) {res.send('index')
})
console.log('just whatever');

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('listening');
})



