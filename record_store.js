var RecordStore = function(name, city){

  this.name = name;
  this.city = city;
  this.stock = [];
  this.funds = 0;
  this.inventory = 0;
};



RecordStore.prototype = {

  add: function(record){
    this.stock.push(record);
    this.inventory += record.price;
  },

  sell: function(record){
    this.stock.pop(record);
    this.inventory -= record.price;
  },

  list: function(){
    return this.stock;
  }

};






module.exports = RecordStore;