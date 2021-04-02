var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

router.get('/', async (req, res, next) => {
  try{
    const users = await User.find({}); // 모든 사용자 찾기
    res.render('mongoose', {users}); // users 변수로 넣기 
  }
  catch(err){
    console.error(err);
    next(err);
  }
});

module.exports = router;
