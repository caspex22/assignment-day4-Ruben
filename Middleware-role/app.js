const express = require('express');
const logger = require('./middleware/logger')
const Validate = require('./routes/validate');

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(logger); 
app.use('/', Validate);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})