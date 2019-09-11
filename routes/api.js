var express = require('express');
var router = express.Router();
const mongodbFun = require('../clone/mongodbFun/mongodbFun');


router.get('/buscar', async function (req, res, next) {
  let body = req.body;
  let query = body.query || {};
  let mongoFind = await mongodbFun.find('imagens', query);
  res.json(mongoFind);
});


router.post('/criar', async function (req, res, next) {
  let body = req.body;
  let json = body.json;
  console.log(json);
  let mongoCreate = await mongodbFun.create('imagens', json);
  res.json(mongoCreate);
});


router.put('/atualizar', async function (req, res, next) {
  let body = req.body;
  let query = body.query || {};
  let json = body.json;
  let mongoFind = await mongodbFun.update('imagens', query, json);
  res.json(mongoFind);
});


router.delete('/remover', async function (req, res, next) {
  let body = req.body;
  let query = body.query || {};
  let mongoFind = await mongodbFun.remove('imagens', query);
  res.json(mongoFind);
});

module.exports = router;
