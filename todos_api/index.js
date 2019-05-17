const express = require ('express'),
          app = express(),
   todoRoutes = require('./routes/todos'),
   bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.send('Hello from the root route');
})

app.use('/api/todos', todoRoutes); // sets the '/' to mean '/api/todos'

const PORT = process.env.PORT||3000;
app.listen(PORT, function() {
  console.log(`todosApi node listening on port ${PORT}`)
});