var assert = require("assert");
// require file to access methods/functions for testing
var Record = require("../record");
var theHives = new Record("The Hives", "Vini Vidi Vicious", 10);


describe("records", function(){

  it("should find the artists name", function(){
    assert.equal("The Hives", theHives.artist);
  })

  it("should find the artists album name", function(){
    assert.equal("Vini Vidi Vicious", theHives.title);
  })

  it("should find the price of the record", function(){
    assert.equal(10, theHives.price);
  })

  it("should have a record store", function(){
    assert.equal();
  })

  it("record store should have a name", function(){
    assert.equal();
  })

  it("record store should have a city", function(){
    assert.equal();
  })

  it("record store should have stock", function(){
    assert.equal();
  })

  it("record store should have cash in the bank", function(){
    assert.equal();
  })

  it("record store can add records to stock", function(){
    assert.equal();
  })

  it("record store should list inventory", function(){
    assert.equal();
  })

});