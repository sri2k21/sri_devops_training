var http =require('http');

  http.createServer(function (req, res)
   {
   res.end('Hello Worl!');
   }
   ).listen(5000);
