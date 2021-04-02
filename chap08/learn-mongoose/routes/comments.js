var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();

router.get('/:id', function (req, res, next) {
  // 댓글 조회

  // id로 댓글 쓴 사용자의 댓글 내용 조회
  Comment.find({ commenter: req.params.id }).populate('commenter') // 관련 있는 컬렉션의 다큐먼트 불러옴
  // commenter필드는 ref가 User로 되어있으므로 알아서  users 컬렉션에서 사용자 다큐먼트 찾아서 합침
  // commenter 필드가 사용자 다큐먼트로 치환 

  // commenter 필드는 ObjectID가 아니라 그걸 가진 사용자 다큐먼트가 된다

    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function (req, res, next) {
  
  //https://m.blog.naver.com/PostView.nhn?blogId=jdub7138&logNo=221049373333&proxyReferer=https:%2F%2Fwww.google.com%2F

  const comment = new Comment({
    commenter: req.body.id,
    comment: req.body.comment,
  }); // 스키마 만들고 해당 스키마에 맞게 데이터 저장 
  comment.save()
    .then((result) => {
      return Comment.populate(result, { path: 'commenter' }); // commenter 필드를 합친다
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// 수정
router.patch('/:id', function (req, res, next) {
  // $set 안해도 기입한 필드만 바꾼다
  Comment.update({ _id: req.params.id }, { comment: req.body.comment })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete('/:id', function (req, res, next) {
  Comment.remove({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
