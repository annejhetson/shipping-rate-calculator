describe("Package", function() {
  describe("shippingCost", function() {
    it("returns $2 per ft^3 plus $1 per lb if weight > 5 lbs", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 8;
      testPackage.length = 2;
      testPackage.width = 3;
      testPackage.height = 4;

      testPackage.shippingCost().should.equal(56);
    });

    it("returns $5 plus $2 per ft^3 if weight <= 5 lbs", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 3;
      testPackage.length = 9;
      testPackage.width = 2;
      testPackage.height = 5;

      testPackage.shippingCost().should.equal(185);
    });

    it("returns $7 when length, width and height are 1' and weight is 3lbs", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 3;
      testPackage.length = 1;
      testPackage.width = 1;
      testPackage.height = 1;

      testPackage.shippingCost().should.equal(7);
    });
  });
  
  describe("volume", function() {
    it("returns 1 when length, width and height are 1'", function() {
      var testPackage = Object.create(Package);
      testPackage.length = 1;
      testPackage.width = 1;
      testPackage.height = 1;

      testPackage.volume().should.equal(1);  
    });
  });
});
