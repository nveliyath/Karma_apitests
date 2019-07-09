var request = require("request");
var server = require("../server.js");

var base_url = "http://localhost:3000/login";

describe("Login GTMS Rest API ", function () {

    describe("POST /", function () {
        it("returns status code 200", function (done) {
            request.post({
                headers: { 'content-type': 'application/json' },
                url: base_url,
                json: { "username": "admin", "password": "admin" }
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(body).not.toEqual(null);
                expect(body.length).toBeGreaterThan(30);
                done();
                //server.closeit();              //Need to uncomment this to run individual tests
            });
        });
    });

    
});
