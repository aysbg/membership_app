module.exports = function(app) {
  // Models
  var Admin = require('../db/admin.js');
  var User = require('../db/user.js');

  // User routes
  // -------------------------
  app.get('/users', function(req, res) {
    User.find(function(err, users) {
      if(!err) {
        res.json(users);
      }
      else {
        res.send(err);
      }
    });
  });

  app.post('/users', function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
      if(!err) {
        return true;
      } else {
        return err;
      }
    });
  });


  // Admin routes
  // -------------------------
  app.get('/admins', function(req, res) {
    Admin.find(function(err, adm) {
      if (err)
        res.send(err);

      // return all in JSON format
      res.json(adm);
    });
  });

  app.post('/admins', function(req, res) {
    var admin = new Admin(req.body);

    admin.save(function (err) {
      if (!err) {
        return console.log("admin created");
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
        if(docs.length > 0)
          res.send('true');
        else
          res.send('false');
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
