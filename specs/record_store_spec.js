var assert = require("assert");

var RecordStore = require("../record_store")

var amoebaMusic = new RecordStore("Amoeba Music", "Los Angeles", 5000, 25000);
var roughTrade = new RecordStore("Rough Trade", "New York City", 3500, 18000);

describe("Record Store", function(){

  it("Should have a name", function(){
    assert.equal("Amoeba Music", amoebaMusic.name);
  })

  it("Should have a city", function(){
    assert.equal("New York City", roughTrade.city);
  })

  it("Should have records in store", function(){
    assert.equal(5000, amoebaMusic.records);
  })

  it("Should have a balance in the bank", function(){
    assert.equal(18000, roughTrade.balance);
  })

});