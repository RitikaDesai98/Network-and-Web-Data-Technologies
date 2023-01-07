const express = require("express");
const router = express.Router();

const Message = require("../models/message.js");
const User = require("../models/user.js");

var msg = new Array();
var friends = [];

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, async function (req, res) {
  await Message.find({
    $or: [{ sender: req.user.id }, { receiver: req.user.id }],
  }).then((data) => {
    data.forEach(function (m) {
      msg.push(m);
    });
  });
  await msg.forEach(function (m) {
    User.find({ $or: [{ _id: m.receiver }, { _id: m.sender }] }).then(
      (friend) => {
        friend.forEach(function (f) {
          if (f.id != req.user.id) {
            var index = friends.findIndex((object) => {
              object.id === f.id;
            });
            friends.findIndex((object) => object.id === f.id) === -1
              ? friends.push(f)
              : console.log("exists");
          }
        });
      }
    );
  });
  res.render("chat", {
    chat_list: friends,
    user: req.user,
  });
});

router.get("/admin", authCheck, async function (req, res) {
  await Message.find({
    $or: [{ sender: req.user.id }, { receiver: req.user.id }],
  }).then((data) => {
    data.forEach(function (m) {
      msg.push(m);
    });
  });
  await msg.forEach(function (m) {
    User.find({ $or: [{ _id: m.receiver }, { _id: m.sender }] }).then(
      (friend) => {
        friend.forEach(function (f) {
          if (f.id != req.user.id) {
            var index = friends.findIndex((object) => {
              object.id === f.id;
            });
            friends.findIndex((object) => object.id === f.id) === -1
              ? friends.push(f)
              : console.log("exists");
          }
        });
      }
    );
  });
  res.render("adminView", {
    chat_list: friends,
    user: req.user,
  });
});

router.get("/send-broadcast-chat/", async function (req, res) {
  await Message.find({
    $or: [{ sender: req.user.id }, { receiver: req.user.id }],
  }).then((data) => {
    data.forEach(function (m) {
      msg.push(m);
    });
  });
  await msg.forEach(function (m) {
    User.find({ $or: [{ _id: m.receiver }, { _id: m.sender }] }).then(
      (friend) => {
        friend.forEach(function (f) {
          if (f.id != req.user.id) {
            var index = friends.findIndex((object) => {
              object.id === f.id;
            });
            friends.findIndex((object) => object.id === f.id) === -1
              ? friends.push(f)
              : console.log("exists");
          }
        });
      }
    );
  });
  await 
    User.find({}, function (err, friend_list) {
    var f_list = []
friend_list.forEach(function(f){
      f_list.push(f.id)
    })
    res.render("broadcastChat", {
        chat_list: friends,
        user: req.user,
        friend: f_list
      });
    }).clone();
  
});


router.get("/view-chat/:id", async function (req, res) {
  await Message.find({
    $or: [{ sender: req.user.id }, { receiver: req.user.id }],
  }).then((data) => {
    data.forEach(function (m) {
      msg.push(m);
    });
  });
  await msg.forEach(function (m) {
    User.find({ $or: [{ _id: m.receiver }, { _id: m.sender }] }).then(
      (friend) => {
        friend.forEach(function (f) {
          if (f.id != req.user.id) {
            var index = friends.findIndex((object) => {
              object.id === f.id;
            });
            friends.findIndex((object) => object.id === f.id) === -1
              ? friends.push(f)
              : console.log("exists");
          }
        });
      }
    );
  });
  await Message.find({
    $and: [
      {
        $or: [{ receiver: req.user.id }, { sender: req.user.id }],
      },
      {
        $or: [{ sender: req.params.id }, { receiver: req.params.id }],
      },
    ],
  }).then((message_list) => {
    User.findById(req.params.id, function (err, f) {
      res.render("chatView", {
        chat_list: friends,
        message_list: message_list,
        user: req.user,
        friend: f,
      });
    });
  });
});

//prevent error if user messes with url in address bar
// router.get("/view-chat/", function (req, res) {
//   res.redirect("/chat");
// });

router.post("/search-user", function (req, res) {
  console.log(req.body.user_email);
  User.findOne({ email: req.body.user_email }, function (err, user) {
    res.render("searchUser", { user: user });
  });
});

router.post("/:id", function (req, res) {
  const message = new Message({
    text: req.body.msg,
    sender: req.user.id,
    receiver: req.params.id,
  });
  message.save();
  res.redirect(req.get('referer'));
});

router.post("/broadcast/:id", function (req, res) {
  var receiver_list = req.params.id
  var r_list = receiver_list.split(",")
  console.log(r_list)
  r_list.forEach(function(r) {
    const message = new Message({
    text: req.body.msg,
    sender: req.user.id,
    receiver: r,
  });
  message.save();
  })
  
  res.redirect(req.get('referer'));
});

router.delete("/message/:id", (req, res) => {
  Message.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
  // res.redirect("/chat");
  res.redirect(req.get('referer'));
});

module.exports = router;
