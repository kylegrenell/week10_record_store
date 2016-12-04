var assert = require("assert");
var RecordCollector = require("../record_collector");
var Record = require("../record");
var RecordStore = require("../record_store");

describe("Record Collector", function(){

  var record1;
  var store1;
  var collector;

  beforeEach(function(){

    collector = new RecordCollector("humphry");
    record1 = new Record("Ryan Paris", "Dolce Vita", 6.75);
    store1 = new RecordStore("Amoeba Music", "Los Angeles", 0, 0);

    });

  it("Should have a name", function(){
    assert.equal("humphry", collector.name);
    // console.log(collector.name);
  });

  it("should have funds to purchase records", function(){
    assert.equal(100, collector.funds);
    // console.log(collector.funds);
  });

  it("Should have an empty collection to begin with", function(){
    assert.equal(0, collector.collection);
    // console.log(collector.collection);
  })

  it('Should be able to buy a record', function(){
    collector.buy(record1, store1);
    assert.equal(93.25, collector.funds);
    // console.log(collector.funds);
  })

  it("Should be able to sell a record", function(){
    collector.buy(record1, store1);
    collector.sell(record1, store1);
    // console.log(collector.funds);
    assert.deepEqual(100, collector.funds);
  })

  it("Should show inventory of collectors records", function(){
    collector.buy(record1, store1);
    // console.log(collector.collection);
    assert.deepEqual([record1], collector.collection);
  })

});