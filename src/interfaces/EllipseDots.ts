export interface EllipseDotsInterface {
    x1: number;
    y1: number;
    r1: number;
    r2: number;
    color: string;
    backgroundColor: string;
    figureFromLocalStorage(obj: object):this;
    parseString(): void;
    setRadius1(r1: number): void;
    setRadius2(r2: number): void;
}