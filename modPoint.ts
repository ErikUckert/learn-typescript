export class ModPoint {
    constructor(private _point?: number[]) {

    }
    set pointX(x) {
        if (x < 0)
            throw new Error("Coordinates must be below 0");
        this._point[0] = x;

    }

    get pointX() {
        return this._point[0];
    }
}