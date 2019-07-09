/**
 * Created by Robin on 06/23/2019.
 */

var request = require("request");
var server = require("../server.js");

var delete_url = "http://localhost:3000/excursions/5",
    login_url = "http://localhost:3000/login",token;

describe("Test delete my excursions ", function () {
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

describe("DELETE /", function () {
    it("deletes 1 record", function (done) {

        request.delete({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: delete_url
        }, function (error, response, body) {
            expect(body).toEqual('1');
            done();
            //server.closeit();              //Need to uncomment this to run individual tests
        });

    });


});
