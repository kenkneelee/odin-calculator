const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

// const sum = function(array) {
//   let total=0;
// 	for (i=0; i<array.length; i++) {
//     total+=array[i];
//   }
//   return total;
// };

const sum = function(array) {
  return array.reduce((a,b) => a+b, 0);
}

// const multiply = function(array) {
//   let product=1;
//   for (i=0;i<array.length;i++) {
//     product *= array[i];
//   }
//   return product;
// };

const multiply = function(array) {
  return array.reduce((a,b)=> a*b, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	if (number < 0){
    return undefined;
  }
  else if (number == 0) {
    return 1;
  }
  else {
    let final=1;
    for (let i=number; i>=1; i--) {
      final *= i;
    }
    return final;
  }
};
