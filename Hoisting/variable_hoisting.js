// test variables in function a
function a() {
    let x = 1;
    console.log(x);
    let x;
    console.log(x);
    let x = 2;
    console.log(x);
}

a();

// test function hoisting
console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {
    return a + b;
}

const multiply = function (a, b) {
    return a * b;
}