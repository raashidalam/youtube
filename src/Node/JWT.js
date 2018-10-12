var express = require('express'),  
    bodyParser = require('body-parser');  
    const cors = require('cors');
var users = require('./users.json');  
var logger = require('morgan');  
var app = express();  
app.use(bodyParser());  
app.use(logger('dev'));  
var port = 5000; //setting port no.  
var jwt = require('jsonwebtoken');  
app.set('superSecret', "success is inevitable");  
var router = express.Router(); 
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors);
router.post('/authenticate', function(req, res) { //this will issue token for valid users  
  var username = req.body.user;  
  var password = req.body.password;  
  var isUserFound = false;  
  var foundUser = {};  
  console.log(req.body.Email + " " + req.body.password);  
  for (var i = 0; i < users.length; i++) {  
      if (users[i].user === req.body.Email) {  
          isUserFound = true;  
          foundUser = users[i];  
      }  
  }  
  if (isUserFound) {  
      if (foundUser.password == req.body.password) {  
          var token = jwt.sign(foundUser, app.get('-'), {  
            algorithm: 'HS256',
            expiresIn: 1440 // expires in 24 hours  
          });  
          console.log(token);  
          res.json({  
              success: true,  
              message: 'Enjoy your token!',  
              token: token  
          });  
      } else {  
          res.json({  
              success: false,  
              message: 'Authentication failed. Wrong password.'  
          });  
      } 
      res.send(foundUser);  
  } else {  
      res.json({  
          success: false,  
          message: 'Authentication failed. user not found.'  
      });  
  }  
});  

router.use(function(req, res, next) {  
  
  // check header or url parameters or post parameters for token  
  var token = req.body.token || req.query.token || req.headers['x-access-token'];  

  // decode token  
  if (token) {  
      // verifies secret and checks exp  
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {  
          if (err) {  
              return res.json({  
                  success: false,  
                  message: 'Failed to authenticate token.'  
              });  
          } else {  
              // if everything is good, save to request for use in other routes  
              req.decoded = decoded;  
              next();  
          }  
      });  
  } else {  
      // if there is no token  
      // return an error  
      return res.status(403).send({  
          success: false,  
          message: 'No token provided.'  
      });  
  }  
});  

router.get('/users', function(req, res) {  
  //console.log(User);  
  return res.json({  
      status: 'OK',  
      msg: "you are authenticated and all set to consume our services."  
  });  
 
});  
router.use(function(req, res, next) {  
  // do logging  
  console.log('Something is happening.');  
  next();  
});  
 
app.use('/api', router);  
 
// START THE SERVER  

app.listen(port);  
console.log('Magic happens on port ' + port);  