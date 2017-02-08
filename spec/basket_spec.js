var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

describe ('basket', function(){

  it('should start out empty', function(){
    assert.equal(0, basket.itemList.length);
  });

  it('should be able to hold an item', function(){
    // var testItem = Object.create(item);
    basket.addItem(item);
    // basket.addItem(testItem);
    assert.equal(1, basket.itemList.length);
  });

  it('should be able to know the name of items in the basket', function(){
    basket.itemList = [];
    basket.addItem(item);
    assert.equal("banana", basket.itemList[0].name);
  });

  it('should be able to return a total price for all items in itemlist', function(){
    basket.itemList = [];
    basket.addItem(item);
    assert.equal(30, basket.getTotal());
  });

  it('should be able to remove an item by name', function(){
    basket.removeItem(item);
    assert.equal(0, basket.itemList.length);
  });

  it('should be able to take 10% off after £20 total', function(){
    basket.itemList = [];
    basket.addItem(item);
    basket.discount10();
    assert.equal(27, basket.discount10());

  });

it('should be able to apply additional loyalty card discount of 5%', function(){
  basket.itemList = [];
  basket.setLoyaltyCard();
  basket.addItem(item);
  basket.discount10();
  basket.loyaltyCardDiscount();
  assert.equal(25.65, basket.loyaltyCardDiscount());
});


it('should be able to accept loyalty card status change', function(){
  assert.equal(true, basket.setLoyaltyCard());
});



//item tests 

  it('item should have a name', function(){
    assert.equal("banana", item.name);
  });

  it('item should have a price', function(){
    assert.equal(30, item.price);
  });


});

