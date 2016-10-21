var uuid = require('..');
var uuids = [
    "dog",
    "cat",
    "horse",
    "wolf",
    "kangaroo",
    "hippopotamus",
    "human"
].map(function(v){
    return uuid.v1(v)
})

console.log(uuids)
