var assert = require("assert");

var Record = require("../record");

var theHives = new Record("The Hives", "Vini Vidi Vicious", 9.99);
var soulwax = new Record("Soulwax", "Nite Versions", 8.99);
var cameraObscura = new Record("Camera Obscura", "Let's get out of this country", 11.95);


describe("records", function(){

  it("should find the artists name", function(){
    assert.equal("The Hives", theHives.artist);
  })

  it("should find the artists album name", function(){
    assert.equal("Vini Vidi Vicious", theHives.title);
  })

  it("should find the price of the record", function(){
    assert.equal(8.99, soulwax.price);
  })

  it("should have a record store");

  it("record store should have a name");

  it("record store should have a city");

  it("record store should have stock");

  it("record store should have cash in the bank");

  it("record store can add records to stock");

  it("record store should list inventory");

});