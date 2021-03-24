export interface CircleDotsInterface {
    x1: number;
    y1: number;
    r: number;
    color: string;
    backgroundColor: string;
    figureFromLocalStorage(obj: object):this;
    parseString(s: string): void;
    setRadius([r]: number[]): void;
}