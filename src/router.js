const Router = require('express').Router;
const {tokenGenerator, voiceResponse} = require('./handler');

const router = new Router();

router.get('/token', (req, res) => {
  console.log('token', tokenGenerator());
  res.send(tokenGenerator());
});

router.post('/voice', (req, res) => {
  res.set('Content-Type', 'text/xml');
  console.log('voice', req.body);
  res.send(voiceResponse(req.body));
});

module.exports = router;
