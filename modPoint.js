"use strict";
exports.__esModule = true;
exports.ModPoint = void 0;
var ModPoint = /** @class */ (function () {
    function ModPoint(_point) {
        this._point = _point;
    }
    Object.defineProperty(ModPoint.prototype, "pointX", {
        get: function () {
            return this._point[0];
        },
        set: function (x) {
            if (x < 0)
                throw new Error("Coordinates must be below 0");
            this._point[0] = x;
        },
        enumerable: false,
        configurable: true
    });
    return ModPoint;
}());
exports.ModPoint = ModPoint;
