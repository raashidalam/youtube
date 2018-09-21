const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const router = express.Router();
server.listen(3000);
server.on('listening', () => {
  console.log('Server is listening on port: 3000');
});
app.use(express.json());
var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'Welcome@1234',
        server: 'ggku3ser2', 
        database: 'Anudeep' ,

        
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
    };
    

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




app.get('/users',cors(),function(req, res) {
 
           
        // query to the database and get the records
        request.query('select id from youtube', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            //res.send(recordset);
          //  sql.close();
        });
    });

    app.post('/postdata', cors(),function(req, res) {
     console.log(req.body.id);
     request.query("insert into youtube values('"+req.body.id+"','"+req.body.title+"')", function (error, results)    {
        if(error) throw error;

   
       res.send(JSON.stringify(results));
       //sql.close();
    });
});
app.post('/postcomment', cors(),function(req, res) {
    console.log(req.body.id);
    request.query("insert into youtube_comment values('"+req.body.id+"','"+req.body.comment+"')", function (error, results)    {
       if(error) throw error;

  
      res.send(JSON.stringify(results));
      //sql.close();
   });
});
 });
