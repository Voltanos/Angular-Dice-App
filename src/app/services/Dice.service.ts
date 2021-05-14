export class DiceService {
    constructor() {}

    GetDice() {
        return new DiceServiceObj();
    }
}

function DiceServiceObj() {
    var Self = this;

    Self.D2 = function () {
        return RandomRoll(2);
    };

    Self.D4 = function () {
        return RandomRoll(4);
    };

    Self.D6 = function () {
        return RandomRoll(6);
    };

    Self.D8 = function () {
        return RandomRoll(8);
    };

    Self.D10 = function () {
        return RandomRoll(10);
    };

    Self.D12 = function () {
        return RandomRoll(12);
    };

    Self.D20 = function () {
        return RandomRoll(20);
    };

    Self.D100 = function () {
        return RandomRoll(100);
    };

    Self.DY = function (y) {
        return RandomRoll(y);
    };

    Self.XDY = function (x, y) {
        return MultiRandomRoll(y, x);
    };

    Self.BetweenRange = function (x, y) {
        return RandomXAndY(x, y);
    };

    function RandomRoll(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    function RandomXAndY(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    function MultiRandomRoll(max, multiplier) {
        var total = 0;

        for (var i = 0; i < multiplier; i += 1) {
            total += RandomRoll(max);
        }

        return total;
    }
}