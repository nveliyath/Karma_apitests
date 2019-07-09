/**
 * Created by Robin on 06/23/2019.
 */
var request = require("request");
var server = require("../server.js");
var JWT   = require('jsonwebtoken');
var create_url = "http://localhost:8080/nsrwebapp/createBUCustomer";
    

describe("Test creates my excursions ", function () {
    it("returns token",function (done) {


        request.post({
            headers: { 'content-type': 'application/json' },
            url: create_url,
            json: { "sourceGroupId": "1", "sourceGroupDescription": "test" , "buCustomerCode" : "4", "tradeNameCode": "PTC"}
/*

	private int sourceGroupId;
	private String sourceGroupDescription;
	private String buCustomerCode;
	private String buCustomerDescription;
	private String buLocalCustomerCode;
	private int tradeNameCode;
	private String tradeNameDescription;
	private String buAttribute1;
	private String buAttribute2;
*/

        }, function (error, response, body) {
            expect(body.length).toBeGreaterThan(30);
            token=body;
            done();
        });
    });







});

describe("CREATE /", function () {
    it("creates 1 record", function (done) {
        decoded = JWT.decode(token,"admin");
        request.post({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: create_url,
            json:{
                user_id:decoded.id,
                name:"Test",
                short_description:"Test",
                accomodation_type:"Test",
                tour_code:"Test 3122",
                tour_duration:5,
                tour_picture:"../images/Test.jpg",
                min_price:222,
                city:"Test",
                state:"Test",
                zip:"452204",
                country:"UK"


            }
        }, function (error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
            //server.closeit();          //Need to uncomment this to run individual tests
        });

    });


});
