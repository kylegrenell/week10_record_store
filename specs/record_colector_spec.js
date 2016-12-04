var assert = require("assert");
var RecordCollector = require("../record_collector");
var Record = require("../record");
var RecordStore = require("../record_store");

describe("Record Collector", function(){

  var collector;
  var record1;
  var store1;

  beforeEach(function(){

    collector = new RecordCollector("humphry", 50);
    record1 = new Record("Ryan Paris", "Dolce Vita", 6.75);
    store1 = new RecordStore("Amoeba Music", "Los Angeles", 0, 0);

    });

  it("Should have a name", function(){
    assert.equal("humphry", collector.name);
    console.log(collector.name);
  });

  it("should have funds to purchase records", function(){
    assert.equal(50, collector.funds);
  });

  

});