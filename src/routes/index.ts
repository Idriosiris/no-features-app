import express from 'express';

let router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send("Welcome to the backend of the useless app");
});

router.get('/healthcheck', (req, res) => {
  res.status(200).send("ok");
});

export default router;
