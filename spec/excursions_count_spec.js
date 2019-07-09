/*
var request = require("request");
var server = require("../index.js");

var excursions_url = "http://localhost:3000/api/v1/excursions/count",
    login_url = "http://localhost:3000/login"

describe("Count # of excurions in GTMS Rest API ", function () {

    request.post({
        headers: { 'content-type': 'application/json' },
        url: login_url,
        json: { "username": "mdearman2@libera.com", "password": "A75D5C8AB4C8EEEF187FDF5DAF154459" }
    }, function (error, response, body) {



        describe("POST /", function () {
            it("get the pageCount attribute", function (done) {

                request.post({
                    headers: {
                        "content-type": "application/json",
                        "x-key": "libera.com",
                        "x-access-token": body.token
                    },
                    url: excursions_url,
                    json: {
                        "startDate": "2016-01-01"
                        , "endDate": "2017-01-01"
                        , "excursionNumber": "%E%"
                        , "description": "%test%"
                        , "recordsPerPage": 30
                    }
                }, function (error, response, body) {
                    expect(body[0].pageCount).toBeGreaterThan(0);   //??
                   // server.closeServer();
                    done();
                });

            });


        });




    });

});

*/
