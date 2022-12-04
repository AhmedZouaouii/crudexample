var express = require('express');
var router = express.Router();
var db = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/addarticle',(req,res)=>{
  db.article.create(req.body).then(
    (r)=>{
      res.send(r)
    }
  )
})
module.exports = router;
