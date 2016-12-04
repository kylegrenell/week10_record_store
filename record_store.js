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
  },

  report: function(){
    var stockValue = this.collection.reduce(function(sum, record){
      return sum + record.price;
    }, 0
    );
    return "Balance for " + this.name + " is " + stockValue + ".\nIt has " + this.collection.length + " records in stock.";
  },

  getTitle: function(title){
    var titleChecker = this.collection.find(function(record){
      return record.title === title;
    }); 
    { 
      return titleChecker;
    }
  }
      
};


module.exports = RecordStore;