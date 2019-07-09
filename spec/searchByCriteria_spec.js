/**
 * Created by Robin on 06/23/2019.
 */
var server = require("../server.js");
var request=require("request");
var searchurl="http://localhost:3000/listings/search";
describe("search By Criteria",function(){
    it("Search by city and Name", function(done) {
        request.post({
            headers: {'content-type': 'application/json'},
            url: searchurl,
            json: { "city": "Pune", "name": "Novotel"}
        }, function (error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Search By city and name with bedrooms, bathrooms",function(done){
            request.post({
                headers:{'content-type':'application/json'},
                url:searchurl,
                json:{"city":"pune", "name":"novotel","bedrooms":2,"bathrooms":2}
            },function(error,response,body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    it("Search By city and name with sleeps",function(done){
        request.post({
            headers: {'content-type': 'application/json'},
            url: searchurl,
            json: { "city": "pune", "name": "novotel", "sleeps": 2}
        },function(error,reponse,body){
            expect(reponse.statusCode).toBe(200);
            done();
            //server.closeit();    //Need to uncomment this to run individual tests
        });
    })


});
