module.exports = function reverse (n) {
    return +(n.toString().split("").filter(x => x !== '-').reverse().join(""));
}
