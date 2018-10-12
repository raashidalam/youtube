var jwt = require('jsonwebtoken');
var atob = require('atob');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('myTotalySecretKey')

exports.signup=function(req , res){
	 var fname  = req.body.first_name;
	 var lname= req.body.last_name;
	 var pass= req.body.password;
	 var email=req.body.email;
	 var dec_pass =atob(pass);
	 var encrypted_pass = cryptr.encrypt(dec_pass);
 
	 var sql = "INSERT INTO `login`(`id`,`first_name`,`last_name`,`email`,`password`) VALUES ('','" + fname + "','" + lname + "','" +email+ "','" +encrypted_pass+ "')";
	  	var query = db.query(sql, function(err, result){
		
	  		res.end(JSON.stringify(result));
	});
 
};

exports.signin=function(req,res)
{
    var name=req.body.email;
    var pass= req.body.password;
    var dec_pass =atob(pass);
   var encrypted_pass = cryptr.encrypt(dec_pass);
   
    var sql="SELECT id, first_name, last_name, email FROM `login` WHERE `email`='"+name+"' and password = '"+encrypted_pass+"'";
    
    db.query(sql, function(err, results){	
        
        if(results != ""){
            
            console.log(JSON.stringify(results));
            
            var data = JSON.stringify(results);
            
            var secret = 'TOPSECRETTTTT';
               var now = Math.floor(Date.now() / 1000),
                   iat = (now - 10),
                   expiresIn = 3600,
                   expr = (now + expiresIn),
                   notBefore = (now - 10),
                   jwtId = Math.random().toString(36).substring(7);
               var payload = {
                   iat: iat,
                   jwtid : jwtId,
                   audience : 'TEST',
                   data : data
               };	
               
            
            jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn : expiresIn}, function(err, token) {
                   
               if(err){
                   console.log('Error occurred while generating token');
                   console.log(err);
                   return false;
               }
                else{
               if(token != false){
                   //res.send(token);
                   res.header();
                   res.json({
                         "results":
                                 {"status": "true"},
                         "token" : token,
                       "data" : results
                                       
                     });
                   res.end();
               }
               else{
                   res.send("Could not create token");
                   res.end();
               }
               
                }
           });
       
        }
        else if(results == ""){
                console.log("not a user");
        }
    });
};
