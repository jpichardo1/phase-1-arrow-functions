const divide = (a, b) => {
    return a / b;
  };
  
  const add = (a, b) => {
    return a + b;
  };
  
  const square = (a) => {
    return a * a;
  };
  
  module.exports = {
    divide,
    add,
    square
  };

  describe("index.js", () => {
    it("has a function expression called divide", () => {
      expect(divide).to.exist;
    });
  
    it("divide divides 2000 by 100", () => {
      let a = 2000;
      let b = 100;
      expect(divide(a, b)).to.equal(20);
    });
  
    it("has an arrow function called add", () => {
      expect(add).to.exist;
    });
  
    it("add adds 2 and 3", () => {
      let a = 2;
      let b = 3;
      expect(add(a, b)).to.equal(5);
    });
  
    it("has an arrow function called square", () => {
      expect(square).to.exist;
    });
  
    it("square squares 4", () => {
      let a = 4;
      expect(square(a)).to.equal(16);
    });
  });