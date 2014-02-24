var Package = {
  shippingCost: function() {
    if (this.weight > 5)
      return this.weight + 2 * this.volume();
    else
      return 5 + 2 * this.volume();
  },

  volume: function() {
    return this.length * this.width * this.height;
  }
};
