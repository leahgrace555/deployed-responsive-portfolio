'use strict';

const express = require('express')
const app = express()

app.use(express.static('/Public'))

app.get('/', function (req, res) {res.send('Hello World!')
})

app.listen(3000)



