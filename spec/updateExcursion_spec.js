/**
 * Created by Robin on 06/23/2019.
 */

var request = require("request");
var server = require("../server.js");

var update_url = "http://localhost:3000/excursions/4",
    login_url = "http://localhost:3000/login",token;

describe("Test update my excursions/listings ", function () {
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

describe("UPDATE /", function () {
    it("updates 1 record", function (done) {

        request.put({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: update_url,
            json:{min_price:800}
        }, function (error, response, body) {
            expect(body).toEqual([1]);
            done();
            server.closeit();                    //This is the last test alphabetically so not commented
        });

    });


});
