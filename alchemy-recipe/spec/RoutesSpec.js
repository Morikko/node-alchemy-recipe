var request = require('supertest');

describe("Routes", function() {
  var server;
  beforeEach(function() {
    // Create Server
    server = require('../server')(3500);
    server = server.app;
  });

  afterEach(function(){
    server.close();
  });

  describe("GET app ", function() {

    it("/ should be accepted", function (done) {
      request(server)
        .get('/')
        .expect(200, this.finish_test(done));
    });

    it("/fail should fail", function (done) {
      request(server)
        .get('/fail')
        .expect(404, this.finish_test(done));
    });
  });

  describe("GET API /api/potion/", function() {

    beforeAll(function(){
      this.prefix = "/api/potion/";
    });

    it("0 should be accepted", function (done) {
      request(server)
        .get(this.prefix+'0')
        .expect(200, this.finish_test(done));
    });

    it("a should fail", function (done) {
      request(server)
        .get(this.prefix+'a')
        .expect(404, this.finish_test(done));
    });

    it(" should fail", function (done) {
      request(server)
        .get(this.prefix)
        .expect(404, this.finish_test(done));
    });

  });

  describe("GET API /ingredients", function() {

    it(" should be accepted", function (done) {
      request(server)
        .get('/api/ingredients')
        .expect(200, this.finish_test(done))
    });

  });

  describe("POST API /mix/", function() {

    beforeAll(function(){
      this.prefix = "/api/mix/";
    });

    it("1-2-3 should be accepted", function (done) {
      request(server)
        .post(this.prefix+'1-2-3')
        .expect(200, this.finish_test(done));
    });

    it("1-2-3 with GET should fail", function (done) {
      request(server)
        .get(this.prefix+'1-2-3')
        .expect(404, this.finish_test(done))
    });

    it("1-a-3 should fail", function (done) {
      request(server)
        .post(this.prefix+'1-a-3')
        .expect(404, this.finish_test(done));
    });

    it("1-3 should fail", function (done) {
      request(server)
        .post(this.prefix+'1-3')
        .expect(404, this.finish_test(done));
    });

    it(" should fail", function (done) {
      request(server)
        .post(this.prefix)
        .expect(404, this.finish_test(done));
    });

  });

});
