function pizzeriaFactory(stock) {
  var _stock = stock;

  var publicAPI = {
    deliverPizza : deliverPizza,
    getStock,
  };

  return publicAPI;

  function deliverPizza() {
    if (_stock > 0) {
      _stock--;
    } else {
      throw new Error('Not enough stock to deliver !');
    }
    return {
      description: 'i am a pizza',
      ingredient: 'tomato',
    };
  }

  function getStock() {
    return _stock;
  }
}

module.exports = pizzeriaFactory;
