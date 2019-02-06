import express from 'express';
import data from './data/data';

const app = express();

app.get('/api/v1/articles', (req, res) => {
  res.status(200).send({
    articles: data
  })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
