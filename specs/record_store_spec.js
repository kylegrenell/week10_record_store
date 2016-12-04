var assert = require("assert");

var RecordStore = require("../record_store");
var Record = require("../record");
var RecordCollector = require("../record_collector");

describe("Record Store", function(){

  var amoeba;
  var roughTrade;
  var cameraObscura;
  var hives;
  var soulwax;
  var collector;

  beforeEach(function(){

  amoeba = new RecordStore("Amoeba Music", "Los Angeles", 0, 0);
  roughTrade = new RecordStore("Rough Trade", "New York City", 0, 0);
  cameraObscura = new Record("Camera Obscura", "Lets get out of this country", 11.95);
  hives = new Record("The Hives", "Vini Vidi Vicious", 9.99);
  soulwax = new Record("Soulwax", "Nite Versions", 8.99);
  collector = new RecordCollector("humphry", 100);
  });

  it("Should have a name", function(){
    assert.equal("Amoeba Music", amoeba.name);
    console.log(amoeba.name);
  });

  it("Should have a city", function(){
    assert.equal("New York City", roughTrade.city);
    console.log(roughTrade.city);
  });

  it('Should start with no records', function(){
    assert.equal(0, amoeba.collection.length);
    assert.equal(0, roughTrade.collection.length);
    console.log(amoeba.collection);
    console.log(roughTrade.collection);
  });

  it('Should be able to add records', function(){
    amoeba.add(cameraObscura);
    amoeba.add(hives);
    roughTrade.add(soulwax);
    assert.equal(2, amoeba.collection.length);
    assert.equal(1, roughTrade.collection.length);
    console.log(amoeba.collection);
    console.log(roughTrade.collection);
  });

  it("Should list the added inventory", function(){
    amoeba.add(soulwax);
    assert.deepEqual([soulwax], amoeba.list());
  });

  it('Should start with no money in bank', function(){
    assert.equal(0, amoeba.inventory);
    console.log(amoeba.inventory);
  });

  it('Should calculate record price as profit', function(){
    amoeba.add(hives);
    assert.equal(9.99, amoeba.inventory);
    console.log(amoeba.inventory);
  });

  it("Should be able to accumulate mutiple sales", function(){
    amoeba.add(cameraObscura);
    amoeba.add(hives);
    amoeba.add(soulwax);
    assert.equal(30.93, amoeba.inventory);
    console.log(amoeba.inventory);
  });

  it("Should be able to sell a record from collection", function(){
    roughTrade.add(cameraObscura);
    roughTrade.add(hives);
    roughTrade.add(soulwax);
    roughTrade.sell(cameraObscura);
    assert.equal(2, roughTrade.collection.length);
    assert.equal(18.98, roughTrade.inventory)
    console.log(roughTrade.collection);
    console.log(roughTrade.inventory);
  });

  it("Should be able to give financial report", function(){
    roughTrade.add(cameraObscura);
    roughTrade.add(hives);
    roughTrade.add(soulwax);
    assert.equal("Balance for Rough Trade is 30.93.\nIt has 3 records in stock.", roughTrade.report());
  });

});