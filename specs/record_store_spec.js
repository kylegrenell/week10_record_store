var assert = require("assert");

var RecordStore = require("../record_store");
var Record = require("../record");

var amoeba;
var roughTrade;
var cameraObscura;
var hives;
var soulwax;

describe("Record Store", function(){

  beforeEach(function(){

  amoeba = new RecordStore("Amoeba Music", "Los Angeles", 0, 0);
  roughTrade = new RecordStore("Rough Trade", "New York City", 0, 0);
  cameraObscura = new Record("Camera Obscura", "Lets get out of this country", 11.95);
  hives = new Record("The Hives", "Vini Vidi Vicious", 9.99);
  soulwax = new Record("Soulwax", "Nite Versions", 8.99);

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
    assert.equal(0, amoeba.stock.length);
    assert.equal(0, roughTrade.stock.length);
    console.log(amoeba.stock);
    console.log(roughTrade.stock);
  });

  it('Should be able to add records', function(){
    amoeba.add(cameraObscura);
    amoeba.add(hives);
    roughTrade.add(soulwax);
    assert.equal(2, amoeba.stock.length);
    assert.equal(1, roughTrade.stock.length);
    console.log(amoeba.stock);
    console.log(roughTrade.stock);
  });

  it("Should list the added inventory", function(){
    amoeba.add(soulwax);
    assert.deepEqual([soulwax], amoeba.list());
  });

  it('Should start with no money in bank', function(){
    assert.equal(0, amoeba.funds);
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

  it("Should be able to sell a record from stock", function(){
    roughTrade.add(cameraObscura);
    roughTrade.add(hives);
    roughTrade.add(soulwax);
    roughTrade.sell(cameraObscura);
    assert.equal(2, roughTrade.stock.length);
    console.log(roughTrade.stock);
  });

});