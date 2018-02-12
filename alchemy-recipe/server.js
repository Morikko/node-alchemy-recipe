const express = require('express')
const app = express()
var api = express.Router()

var model = require('./model')
var helper = require('./api-helper')

app.get('/', function (req, res) {
  res.send('views/index.html')
})

api.get('/ingredients', function(req, res){
  res.json(model.ingredients);
});

api.post('/mix/:ing1(\\d+)-:ing2(\\d+)-:ing3(\\d+)', function(req, res){
  res.json({
    potionId: helper.make_recipe([
      parseInt(req.params.ing1,10),
      parseInt(req.params.ing2,10),
      parseInt(req.params.ing3,10),])
  });
});

api.get('/potion/:id(\\d+)', function(req, res){
  let id = parseInt(req.params.id,10)
  if ( id >= model.potions.length ) {
    res.status(500).send('The id is not a valid potion');
  }
  res.json(model.potions[id]);
});

app.use('/api', api);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
