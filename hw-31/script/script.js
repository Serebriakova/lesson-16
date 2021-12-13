function flatMy(array) {
  let result = [];
  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  } else if (!array.some(Array.isArray)) {
    return (result = [...array]);
  }

  function check(item) {
    for (let i = 0; i < item.length; i++) {
      if (Array.isArray(item[i])) {
        check(item[i]);
      } else {
        result.push(item[i]);
      }
    }
  }
  check(array);
  return result;
}

let a = [1, 2, 1, [2, 9]];
console.log(flatMy(a));
