var RecordCollector = function(name){

  this.name = name;
  this.funds = 100;
  this.collection = [];

}

RecordCollector.prototype = {

  buy: function(purchase, recordStore){
    this.collection.push(purchase);
    this.funds = this.funds - purchase.price;
    recordStore.sell(purchase);
  },

  sell: function(recordSale, recordStore){
    var index = this.collection.indexOf(recordSale);
    this.collection.splice(index, 1);
    this.funds += recordSale.price;
  }
};


module.exports = RecordCollector