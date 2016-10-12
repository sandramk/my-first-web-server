//require the express module
const express = require('express');

//create a new instance modeule
const app = express();

//declare our route
app.get('/:message', function(request, response, next){
  const message = request.params.message;
  console.log(request.params);
  return response.json(message);
});

//set our port to serve the application on
const port = 3030;

//tell our instance of express to listen to request made on our port
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
})
