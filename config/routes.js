module.exports = function (app) {
  'use strict';

  // Models
  var Admin = require('../db/admin.js');
  var User = require('../db/user.js');

  // User routes
  // -------------------------
  app.get('/users', function(req, res) {
    User.find().sort({ register_date: 'asc' }).exec(function(err, users) {
      if (!err) {
        res.json(users);
      } else {
        res.send(err);
      }
    });
  });

  app.post('/users', function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
      if (!err) {
        return console.log('member created');
      } else {
        return console.log(err);
      }
    });

    return res.send(user);
  });

  app.delete('/users/:unique_id', function(req, res) {
    User.remove({ unique_id: req.params.unique_id }, function(err) {
      if(!err) {
        console.log('member is removed');
        return res.send(true);
      } else {
        console.log(err);
      }
    });
  });

  app.put('/users/:unique_id', function(req, res) {
    var memberData = req.body;

    User.update({ unique_id: req.params.unique_id }, memberData, function(err) {
      if(!err) {
        console.log('member is updated');
        return res.send(true);
      } else {
        console.log(err);
      }
    });
  });

  app.post('/membership/:unique_id', function(req, res) {
    var data = req.body;

    User.collection.update(
      { unique_id: req.params.unique_id },
      { $push: { membership: data } },
      function (err) {
        if(!err) {
          return res.send(true);
        } else {
          console.log(err);
        }
      }
    );

    // model.collection.update(finderObject, replaceWithObject)
  });

  app.post('/terms/:unique_id', function(req, res) {
    var terms_remaining = req.body.terms_remaining;

    User.findOne({ unique_id: req.params.unique_id }, function(err, doc) {
      if(!err) {
        var docLen = doc.membership.length;
        doc.membership[docLen - 1].terms_remaining = terms_remaining;
        doc.save();
        return res.send(true);
      } else {
        console.log(err);
      }
    });
  });


  // Admin routes
  // -------------------------
  app.get('/admins', function(req, res) {
    Admin.find(function(err, adm) {
      if (err) {
        res.send(err);
      }

      // return all in JSON format
      res.json(adm);
    });
  });

  app.post('/admins', function(req, res) {
    var admin = new Admin(req.body);

    admin.save(function (err) {
      if (!err) {
        return console.log('admin created');
      } else {
        return console.log(err);
      }
    });

    return res.send(admin);
  });

  app.get('/admin/:email/:pass', function(req, res) {
    var email = req.params.email,
        pass = req.params.pass;

    Admin.find({ email: email, password: pass } ,function(err, docs) {
      if (!err) {
        if(docs.length > 0) {
          res.send('true');
        } else {
          res.send('false');
        }
      }
      else {
        res.send(err);
      }
    });
  });

  // frontend routes
  // -------------------------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/layout.html');
  });
};
