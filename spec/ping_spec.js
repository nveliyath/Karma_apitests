
var request = require("request");
var server = require("../server.js");

var base_url = "http://localhost:3000/ping"

describe("PING our API ", function() {
  console.log("Hello");
  describe("GET and look for code 200", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("GET and look for ok in the body", function(done) {
      console.log("Goodbye");
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("ok");
        server.closeServer();
        done();
      });
    });
  });
});
