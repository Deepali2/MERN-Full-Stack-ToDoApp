const express = require ('express'),
   app        = express(),
   todoRoutes = require('./routes/todos'),
   bodyParser = require('body-parser'),
   PORT       = process.env.PORT||3001;

  app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://merntodolist.herokuapp.com"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(__dirname + '/public')); //renders the css file to the index.html file
app.use(express.static(__dirname + '/views'));//renders the index.html page in the views directory
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile('index.html');
})

app.use('/api/todos', todoRoutes); // sets the '/' to mean '/api/todos'


app.listen(PORT, process.env.IP, function() {
  console.log(`todosApi node listening on port ${PORT}`)
});