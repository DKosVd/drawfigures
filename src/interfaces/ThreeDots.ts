export interface ThreeDotsInterface {
    x1: number;
    x2: number;
    x3: number;
    y1: number;
    y2: number;
    y3: number;
    color: string;
    backgroundColor: string;
    parseString(): this;
    figureFromLocalStorage(obj: object):this;
    setX2Y2(x2: number, y2: number): void
    setX2Y2(x3: number, y3: number): void
}