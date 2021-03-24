export interface TwoDotsInterface {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    color: string;
    backgroundColor: string;
    parseString(): this;
    figureFromLocalStorage(obj: object):this;
    setX2Y2(x2: number, y2: number): void
}