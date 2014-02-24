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

$(document).ready(function() {
  $("form#newInput").submit(function(event) {
    event.preventDefault();

    var aPackage = Object.create(Package);
    aPackage.weight = parseFloat($("input#weight").val());
    aPackage.length = parseFloat($("input#length").val());
    aPackage.width = parseFloat($("input#width").val());
    aPackage.height = parseFloat($("input#height").val());

    $("p#result").text(aPackage.shippingCost());
    $("p#result").show();
  });
});
