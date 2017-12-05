const Dinosaur = require("../dinosaur.js");
const assert = require("assert");

describe("dinosaur", function() {
  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 1)
  });

  it("should have a type", function() {
    assert.strictEqual(dinosaur.type, "Tyrannosaurus")
  });

  it("should have a number of offspring each year", function() {
    assert.strictEqual(dinosaur.annual_offspring, 1)
  });



});
