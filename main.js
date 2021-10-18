function log(message) {
    console.log(message);
}
var message = "Hello World!";
log(message);
// --> local variables
function count() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
count();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
// --> enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var newMessage = "abc";
var endsWithC = newMessage.endsWith("c");
// --> Type assertion
var assertedMessage;
assertedMessage = "Hello";
var endsWithO = assertedMessage.endsWith("o");
var alternative = assertedMessage.endsWith("o");
// --> Arrow Functions
var logFunc = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var drawPoint = function (coordinates) {
    //--
};
drawPoint({
    x: 1,
    y: 2
});
// --> Principles of cohesion with classes
var PointHandler = /** @class */ (function () {
    function PointHandler() {
    }
    PointHandler.prototype.drawAPoint = function () {
        //--
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    PointHandler.prototype.getDistance = function () {
        //--
    };
    return PointHandler;
}());
var point = new PointHandler();
point.x = 1;
point.y = 2;
point.drawAPoint();
// --> Constructors
var AnotherPointHandler = /** @class */ (function () {
    function AnotherPointHandler(x, y) {
        this.x = x;
        this.y = y;
    }
    AnotherPointHandler.prototype.drawAPoint = function () {
        //--
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return AnotherPointHandler;
}());
var anotherPoint = new AnotherPointHandler(3, 4);
anotherPoint.drawAPoint();
// --> Access Modifier - Private
var Line = /** @class */ (function () {
    function Line(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    Line.prototype.drawLine = function () {
        console.log("Line between Point " + this.pointA + " and Point " + this.pointB);
    };
    return Line;
}());
var line = new Line([1, 2], [3, 4]);
line.drawLine();
