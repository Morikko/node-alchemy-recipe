const express = require('express')
const app = express()
const path = require('path');
var api = express.Router()

var model = require('./model')
var helper = require('./api-helper')

app.use(express.static(path.join(__dirname, 'client/build')));

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

api.get('/potion/:id(\\d+)', function(req, res) {
  let id = parseInt(req.params.id,10)
  if ( id >= model.potions.length ) {
    res.status(500).send('The id is not a valid potion');
  }
  res.json(model.potions[id]);
});

app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

var server = function(port=3000, msg="") {
  return {
    app:app.listen(port),
    model: model,
  };
}

if ( require.main === module ) {
  let port = process.env.PORT || 3000;
  app.listen( port, () => console.log(`Alchemy Recipe listening on ${port} !`))
} else {
  module.exports = server;
}
