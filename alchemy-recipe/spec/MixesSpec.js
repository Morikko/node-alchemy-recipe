/* Tests for the function to mix */
var request = require('supertest');

describe("Mix", function() {
  var server;
  beforeAll(function(){
    this.prefix = "/api/mix/";
  });

  beforeEach(function() {
    // Create Server
    server = require('../server')(3500);

    // Set test data
    server.model.ingredients = [
      server.model.ingredientFactory("Vinegar", 1),
      server.model.ingredientFactory("Rat Head", 3),
      server.model.ingredientFactory("Lama Slaver", 3),
      server.model.ingredientFactory("Blood", 3),
    ];
    server.model.potions = [
      server.model.potionFactory("Invisibility"),
    ]
    server.model.recipes = [
      server.model.recipeFactory(0, [0,1,2]),
    ]
  });

  afterEach(function(){
    server.app.close();
  });

  describe(" 3 ingredients", function() {

    describe(" that create a potion", function () {

          it(" in the right order", function (done) {
            request(server.app)
              .post(this.prefix+'0-1-2')
              .expect(200, {
                potionId: 0,
              }, this.finish_test(done));
          });

          it(" in the wrong order", function (done) {
            request(server.app)
              .post(this.prefix+'0-2-1') // Disorder
              .expect(200, {
                potionId: 0,
              }, this.finish_test(done));
          });

          it(" until the inventory is empty", function (done) {
            request(server.app)
              .post(this.prefix+'0-1-2')
              .expect(200, {
                potionId: 0,
              }, this.finish_test(done));
            request(server.app)
              .post(this.prefix+'0-1-2')
              .expect(200, {
                potionId: -1,
              }, this.finish_test(done));
          });
    });

    it(" that don't create potion", function (done) {
      request(server.app)
        .post(this.prefix+'0-1-3')
        .expect(200, {
          potionId: -1,
        }, this.finish_test(done));
    });
  });

  describe(" unvalid because", function() {

    it(" 3 ingredients but one doesn't exist", function (done) {
      let previousIng = this.deepCopy(server.model.ingredients);

      request(server.app)
        .post(this.prefix+'0-2-5')
        .expect(200, {
          potionId: -1,
        }, )
        .end(function(err, res) {
          previousIng[0].quantity--;
          previousIng[2].quantity--;
          expect(server.model.ingredients).toEqual(previousIng);
          if (err) {
            done.fail(err)
          } else {
            done()
          }
        });

    });

  });

});
