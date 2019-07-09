var request = require("request");
var server = require("../server.js");

var excursions_url = "http://localhost:3000/listings/my/",
    login_url = "http://localhost:3000/login",token;

describe("Test get my listings ", function () {
    it("returns token",function (done) {


    request.post({
        headers: { 'content-type': 'application/json' },
        url: login_url,
        json: { "username": "admin", "password": "admin" }
    }, function (error, response, body) {
           expect(body.length).toBeGreaterThan(30);
            token=body;
            done();
       });
    });







});

describe("GET /", function () {
    it("returns 1/more record", function (done) {

        request.get({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: excursions_url
            }, function (error, response, body) {
            expect(body.length).toBeGreaterThan(100);
            done();
            //server.closeit();    //Need to uncomment this to run individual tests
        });

    });


});


