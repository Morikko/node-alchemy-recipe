const express = require('express')
const app = express()
var api = express.Router()

app.get('/', function (req, res) {
  res.send('hello, user!')
})

api.get('/ingredients', function(req, res){
  res.send('Get all ingredients')
});

api.post('/mix/:ing1(\\d+)-:ing2(\\d+)-:ing3(\\d+)', function(req, res){
  res.send(`Take 3 ingredients (${req.params.ing1}, ${req.params.ing2} and ${req.params.ing3}) and return the potion id if a recipe exists.`)
});

api.get('/potion/:id(\\d+)', function(req, res){
  res.send('Get a potion')
});

app.use('/api', api);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
