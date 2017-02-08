var item = require('./item');

var basket = {
  itemList: [],
  loyaltyCard: false,


  addItem: function(item){
    this.itemList.push(item);
  },

  getTotal: function(){
    var total = 0;
    for(item of this.itemList){
      total += item.price;
    }
    return total;
  },

  removeItem: function(item){
    for(product of this.itemList){
      if(product.name === item.name){
        var remove = this.itemList.indexOf(product.name);
        this.itemList.splice(remove, 1);
        break;
      }
    }
  },

  discount10: function(){
    var total = this.getTotal();
    if(total > 20) {
      return total = total * 0.90;
    } else {
      return total;
    }
  },

  setLoyaltyCard: function(){
   return this.loyaltyCard = true;
  },

  loyaltyCardDiscount: function(){
    var discount = this.loyaltyCard ? this.discount10() *0.95 : this.getTotal();
    return discount;

  }
}

module.exports = basket;