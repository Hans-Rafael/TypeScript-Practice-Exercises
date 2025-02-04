"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log('c:', c);
let colorName = Color[0];
console.log('colorName:', colorName);
function abs(x) {
    return Math.abs(typeof x === 'number' ? x : parseInt(x));
}
console.log('abs(-5):', abs(-5));
console.log('abs(string: -5):', abs("-5"));
