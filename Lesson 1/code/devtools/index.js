console.log("t" + false);
console.log(true && ("t" + false));

console.log(true && ( 1 == 1));
console.log(true && ("t" + false) && {});
console.log(true && ("t" + false) && {} && (1 - 1));
console.log([undefined].length);
console.log(5 && {} && 'false' && 12);
console.log((true && ("t" + false) && {} && (1 - 1)) || ([undefined].length));