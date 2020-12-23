var DualEffector = /** @class */ (function () {
    function DualEffector(item) {
        this.item = item;
    }
    DualEffector.prototype.affected = function () {
        return [this.item, this.item];
    };
    return DualEffector;
}());
var reverseString = function (input) {
    return input.split('').reverse().join('');
};
var dualSawai = new DualEffector("sawai").affected();
console.log(dualSawai.map(reverseString).join('-'));
//# sourceMappingURL=interfaces.js.map