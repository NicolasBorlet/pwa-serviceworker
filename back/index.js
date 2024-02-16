const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/get', (req, res) => {
  res.send(new Date());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
