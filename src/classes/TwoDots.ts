import { MethodForFigure } from './MethodForFigure';
import { TwoDotsInterface } from 'src/interfaces/TwoDots';
import { Coords } from 'src/enums/Coords';
import { TwoDotsFigureInterface } from 'src/interfaces/Figure/TwoDotsFigure';


export class TwoDots extends MethodForFigure implements TwoDotsInterface {
  public x1: number;
  public x2: number;
  public y1: number;
  public y2: number;
  public color: string;
  public backgroundColor: string;
  constructor(str: string) {
    super(str)
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.color = 'rgb(0, 0, 0)';
    this.backgroundColor = 'rgb(0, 0, 0)';
  }

  parseString(): this {
    let coords: number[] | boolean = this.params(this.hasOption(this.queryString, '-p'))
    let color: number[] | boolean = this.params(this.hasOption(this.queryString, '-c'))
    let bgColor: number[] | boolean = this.params(this.hasOption(this.queryString, '-b'))
    if (Array.isArray(coords)) {
      this.setX1Y1(coords[Coords.first], coords[Coords.second])
      this.setX2Y2(coords[Coords.third], coords[Coords.fourth])
    } else {
      console.log('Coords')
    }
    if (Array.isArray(color)) {
      this.setColor(color)
    }
    if (Array.isArray(bgColor)) {
      this.setBackgroundColor(bgColor)
    }
    this.saveInLocalStorage()
    return this
  }

  figureFromLocalStorage(obj: TwoDotsFigureInterface):this {
    console.log('Obj', obj)
    this.setUuid(obj.uuid)
    this.setX1Y1(obj.x1, obj.y1)
    this.setX2Y2(obj.x2, obj.y2)
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

}