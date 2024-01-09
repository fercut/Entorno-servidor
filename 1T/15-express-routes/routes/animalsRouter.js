import express from 'express';

const animalsRouter = express.Router();

animalsRouter.get('/dog', (req, res) => {
  res.json({ grow: 'guau guau' });
});

animalsRouter.get('/cat', (req, res) => {
  res.json({ grow: 'miau' });
});

animalsRouter.get('/bird', (req, res) => {
  res.json({ grow: 'pio pio' });
});

export default animalsRouter;