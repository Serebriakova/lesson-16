let calculator = {
  a: 0,
  b: 0,
  hasValidInput: false,
  read: function () {
    this.hasValidInput = false;
    this.a = prompt("Enter number1");
    if (!checkNumber(this.a)) {
      return false;
    }

    this.b = prompt("Enter number2");

    if (checkNumber(this.b)) {
      return (this.hasValidInput = true);
    }

    return false;
  },
  sum: function () {
    if (this.hasValidInput) {
      return +this.a + +this.b;
    }
  },
  mul: function () {
    if (this.hasValidInput) {
      return this.a * this.b;
    }
  },
};

function checkNumber(num) {
  if (num === null) {
    alert("Cancelled");
    return false;
  } else if (num.trim() === "") {
    alert("Empty String");
    return false;
  } else if (isNaN(+num)) {
    alert("Not a number");
    return false;
  } else {
    return true;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());