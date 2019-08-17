var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../trivial_wol_d");
    });
    afterAll(() => {
        server.stop();
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:30000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe('What can i help you with, sir?');
        });
    });

    // https://www.miniwebtool.com/mac-address-generator/
    describe("GET /?mac=e4:86:87:16:29:e9", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:30000/?mac=e4:86:87:16:29:e9", (error, response, body) => {
                data.status = response.statusCode;
                //data.body = JSON.parse(body);
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("Magic packet sent to: e4:86:87:16:29:e9");
        });
    });
});
