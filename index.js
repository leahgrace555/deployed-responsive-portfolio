'use strict';

const express = require('express');
const app = express(); //bringing in express library
require('dotenv').config();

app.use(express.static('./Public'));

const PORT = process.env.PORT;

app.listen(PORT,() => {
  console.log(`listening on ${PORT}`);
})



