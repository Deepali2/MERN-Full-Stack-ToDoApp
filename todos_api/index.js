const express = require ('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
  res.send('Hello from the root route');
})

app.use('/api/todos', todoRoutes); // sets the '/' to mean '/api/todos'

const PORT = process.env.PORT||3000;
app.listen(PORT, function() {
  console.log(`todosApi node listening on port ${PORT}`)
});