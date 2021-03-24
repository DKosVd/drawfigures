import { figureName } from 'src/enums/figure';

export class MethodForFigure {
    public x1: number;
    public y1: number;
    public color: string;
    public backgroundColor: string;
    protected readonly queryString: string;
    protected uuid: string;
    constructor(str: string) {
        if(!str.split(' ').slice(1).join(' ')) throw new Error('Параметры отсутствуют') 
        this.x1 = 0;
        this.y1 = 0;
        this.uuid = Math.random().toString(16).substring(3)
        this.color = 'black';
        this.backgroundColor = 'black';
        this.queryString = str
    }

    protected hasOption(str: string, attr: string): number | boolean {
        let index: number = str.search(attr)
        return ~index ? index : false;
    }
    protected params(index: number | boolean): number[] | boolean {
        if (typeof (index) === 'number') {
            let str: string = this.queryString.substring(index + 1)
            let param: number | boolean = this.hasOption(str, '-')
            if (typeof (param) === 'number') {
                return this.getParam(str, param)
            }
            return this.getParam(str, str.length)
        }
        return false
    }

    protected getParam(str: string, param: number): number[] {
        return str.substring(1, param).trim().split(' ').map((e: string): number => {
            let digit = e.match(/\d+(.\d+)?/g)
            if(digit) return +digit[0]
            throw new Error(`Отсутствует значение у параметра`)
        });
    }

    protected setUuid(uuid: string) {
        this.uuid = uuid;
    }


    protected setX1Y1(x1: number, y1: number): void {
        if (!(x1 && y1)) throw new Error('Отсутствуют координаты(x1. y1)')
        this.x1 = x1;
        this.y1 = y1;
    }
    
   protected setColor(string: number[]): void {
        if (!(string.length === 3 || string.length === 4)) throw new Error(`Формат ввода цвета, rgb(a)(x, y, z, (g))`)
        this.color = `rgba(${string.join(',')})`;
    }

    protected setBackgroundColor(string: number[]): void {
        if (!(string.length === 3 || string.length === 4)) throw new Error(`Формат ввода цвета, rgb(a)(x, y, z, (g))`)
        this.backgroundColor = `rgba(${string.join(',')})`;
    }

    protected saveInLocalStorage() {
        localStorage.setItem(this.queryString.split(' ')[figureName.figure] + this.uuid, JSON.stringify(this) )
    }

}