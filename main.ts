function log(message) {
    console.log(message);
}

var message = "Hello World!"

log(message);

// --> local variables

function count() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        
    }
    console.log(i);
}

count();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, "a", false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

// --> enumeration

enum Color {
    Red, Green, Blue
};

let backgroundColor = Color.Red;

let newMessage = "abc";
let endsWithC = newMessage.endsWith("c");

// --> Type assertion

let assertedMessage;
assertedMessage = "Hello";
let endsWithO = (<string>assertedMessage).endsWith("o");
let alternative = (assertedMessage as string).endsWith("o");

// --> Arrow Functions

let logFunc = function(message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

// --> Custom Types
interface Coordinates {
    x: number,
    y: number
}

let drawPoint = (coordinates: Coordinates) => {
    //--
}

drawPoint({
    x: 1,
    y: 2
})

// --> Principles of cohesion with classes

class PointHandler {
    x: number;
    y: number;

    drawAPoint() {
        //--
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance() {
        //--
    }
}

let point= new PointHandler();
point.x = 1;
point.y = 2;
point.drawAPoint();

// --> Constructors

class AnotherPointHandler {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    drawAPoint() {
        //--
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}

let anotherPoint= new AnotherPointHandler(3, 4);
anotherPoint.drawAPoint();

// --> Access Modifier - Private

class Line {
    private pointA: number[];
    private pointB: number[];

    constructor(pointA: number[], pointB: number[]) {
        this.pointA = pointA;
        this.pointB = pointB;
    } 

    drawLine() {
        console.log("Line between Point " + this.pointA + " and Point "+ this.pointB);
    }
}

let line = new Line([1,2], [3,4]);
line.drawLine();
