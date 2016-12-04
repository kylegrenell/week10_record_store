var RecordStore = function(name, city){

  this.name = name;
  this.city = city;
  this.collection = [];
  this.inventory = 0;
};



RecordStore.prototype = {

  add: function(record){
    this.collection.push(record);
    this.inventory += record.price;
  },

  sell: function(record){
    this.collection.pop(record);
    this.inventory -= record.price;
  },

  list: function(){
    return this.collection;
  }

};






module.exports = RecordStore;