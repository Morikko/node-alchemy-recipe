var request = require('supertest');

describe("Routes", function() {
  var server;
  beforeEach(function() {
    // Create Server
    server = require('../../server')(3500);
  });

  afterEach(function(){
    server.close();
  });

  describe("GET app ", function() {

    it("/ should be accepted", function () {
      request(server)
        .get('/')
        .expect(200);
    });

    it("/fail should fail", function () {
      request(server)
        .get('/')
        .expect(404);
    });
  });

  describe("API /api/potion/", function() {

    beforeAll(function(){
      this.prefix = "/api/potion/";
    });

    it("0 should be accepted", function () {
      request(server)
        .get(this.prefix+'0')
        .expect(200);
    });

    it("a should fail", function () {
      request(server)
        .get(this.prefix+'a')
        .expect(404);
    });

    it(" should fail", function () {
      request(server)
        .get(this.prefix)
        .expect(404);
    });

  });

  describe("API /ingredients", function() {

    it(" should be accepted", function () {
      request(server)
        .get('/api/ingredients')
        .expect(200);
    });

  });

  describe("API /mix/", function() {

    beforeAll(function(){
      this.prefix = "/api/mix/";
    });

    it("1-2-3 should be accepted", function () {
      request(server)
        .get(this.prefix+'1-2-3')
        .expect(200);
    });

    it("1-a-3 should fail", function () {
      request(server)
        .get(this.prefix+'1-a-3')
        .expect(404);
    });

    it("1-3 should fail", function () {
      request(server)
        .get(this.prefix+'1-3')
        .expect(404);
    });

    it(" should fail", function () {
      request(server)
        .get(this.prefix)
        .expect(404);
    });

  });

});
