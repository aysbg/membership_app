module.exports = function(app) {
  // Models
  var Admin = require('../db/admin.js');

  // Params
  // -------------------------
  // app.param('email', function(req, res, next, email) {
  //   Admin.find({ email: email }, function(err, docs) {
  //     req.email = docs[0];
  //     next()
  //   })
  // });

  // server routes
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
