import { ThreeDotsInterface } from 'src/interfaces/ThreeDots';
import { MethodForFigure } from './MethodForFigure';
import { Coords } from 'src/enums/Coords';
import { ThreeDotsFigureInterface } from 'src/interfaces/Figure/ThreeDotsFigure';


export class ThreeDots extends MethodForFigure implements ThreeDotsInterface{
    public x1: number;
    public x2: number;
    public x3: number;
    public y1: number;
    public y2: number;
    public y3: number;
    public color: string;
    public backgroundColor: string;
    constructor(str: string) {
      super(str)
      this.x1 = 0;
      this.x2 = 0;
      this.y1 = 0;
      this.y2 = 0;
      this.x3 = 0;
      this.y3 = 0;
      this.color = 'black';
      this.backgroundColor = 'black';
    }
    parseString(): this {
        let coords: number[] | boolean = this.params(this.hasOption( this.queryString, '-p'))
        let color: number[] | boolean = this.params(this.hasOption( this.queryString, '-c'))
        let bgColor: number[] | boolean = this.params(this.hasOption( this.queryString, '-b'))
        let lineWidth: number[] | boolean = this.params(this.hasOption(this.queryString, '-l'))
        if(Array.isArray(coords)) {
          this.setX1Y1(coords[Coords.first], coords[Coords.second])
          this.setX2Y2(coords[Coords.third], coords[Coords.fourth])
          this.setX3Y3(coords[Coords.fifth], coords[Coords.sixth])
        }
        if(Array.isArray(color)) {
          this.setColor(color)
        }
        if(Array.isArray(bgColor)) {
          this.setBackgroundColor(bgColor)
        }
        this.saveInLocalStorage()
        return this
     }

     figureFromLocalStorage(obj: ThreeDotsFigureInterface):this {
      console.log('Obj', obj)
      this.setUuid(obj.uuid)
      this.setX1Y1(obj.x1, obj.y1)
      this.setX2Y2(obj.x2, obj.y2)
      this.setX3Y3(obj.x3, obj.y3)
      let color: number[] | boolean = this.params(this.hasOption(obj.queryString, '-c'))
      let bgColor: number[] | boolean = this.params(this.hasOption(obj.queryString, '-b'))
      if(Array.isArray(color)) {
        this.setColor(color)
      }
      if(Array.isArray(bgColor)) {
        this.setBackgroundColor(bgColor)
      }
      return this
    }

    setX2Y2(x2: number, y2: number): void {
        if (!(x2 && y2)) throw new Error('Отсутствуют координаты(x2. y2)')
        this.x2 = x2;
        this.y2 = y2;
    }

    setX3Y3(x3: number, y3: number): void {
        if (!(x3 && y3)) throw new Error('Отсутствуют координаты(x3. y3)')
        this.x3 = x3;
        this.y3 = y3;
    }
  
}