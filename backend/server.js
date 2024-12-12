const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 5000;

// Middleware
app.use(cors(
  {origin:"*"}
));
app.use(bodyParser.json());
app.use(express.json());

//router


app.use('/api/v1/cows',require('./routers/cowRouter'))


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
