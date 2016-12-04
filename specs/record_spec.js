var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");

var theHives = new Record("The Hives", "Vini Vidi Vicious", 9.99);
var soulwax = new Record("Soulwax", "Nite Versions", 8.99);
var cameraObscura = new Record("Camera Obscura", "Let's get out of this country", 11.95);


describe("Records", function(){

  it("should find the artists name", function(){
    assert.equal("The Hives", theHives.artist);
  })

  it("should find the artists album name", function(){
    assert.equal("Vini Vidi Vicious", theHives.title);
  })

  it("should find the price of the record", function(){
    assert.equal(8.99, soulwax.price);
  })

});