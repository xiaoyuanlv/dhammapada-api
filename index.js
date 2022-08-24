const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;
const dhammaRouter = require('./routes/dhamma');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/dhamma', dhammaRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});