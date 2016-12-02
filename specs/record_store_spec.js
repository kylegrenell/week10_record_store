var assert = require("assert");

var RecordStore = require("../record_store")

var amoebaMusic = new RecordStore("Amoeba Music", "Los Angeles", 5000);
var roughTrade = new RecordStore("Rough Trade", "New York City", 3500);

describe("Record Store", function(){

  it("Should have a name", function(){
    assert.equal("Amoeba Music", amoebaMusic.name);
  })

});