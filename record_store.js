var RecordStore = function(name, city){

  this.name = name;
  this.city = city;
  this.collection = [];
  this.balance = 0;
  
};


RecordStore.prototype = {

  add: function(record){
    var collect = this.collection.push(record);
    this.balance += record.price;
    return collect;
  },

  sell: function(record){
    this.collection.pop(record);
    this.balance -= record.price;
  },

  list: function(){
    return this.collection;
  },

  report: function(){
    var stockValue = this.collection.reduce(function(total, record){
      // var sum = testArray.reduce(function(acc, item)
      // {return acc + item}, 0);
      return total + record.price;
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