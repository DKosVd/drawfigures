import { MethodForFigure } from './MethodForFigure';
import { CircleDotsInterface } from 'src/interfaces/CircleDots';
import { Coords } from 'src/enums/Coords';
import { CircleDotsFigureInterface } from 'src/interfaces/Figure/CircleDotsFigure';


export class CircleDots extends MethodForFigure implements CircleDotsInterface {
    public x1: number;
    public y1: number;
    public r: number;
    public color: string;
    public backgroundColor: string;
    constructor(str: string) {
      super(str)
      this.x1 = 0;
      this.y1 = 0;
      this.r = 0;
      this.color = 'black';
      this.backgroundColor = 'black';
    }
    parseString(): this {
        let coords: number[] | boolean = this.params(this.hasOption( this.queryString, '-p'))
        let radius: number[] | boolean = this.params(this.hasOption( this.queryString, '-r'))
        let color: number[] | boolean = this.params(this.hasOption( this.queryString, '-c'))
        let bgColor: number[] | boolean = this.params(this.hasOption( this.queryString, '-b'))
        if(Array.isArray(coords)) {
          this.setX1Y1(coords[Coords.first], coords[Coords.second])
        }
        if(Array.isArray(color)) {
          this.setColor(color)
        }
        if(Array.isArray(bgColor)) {
          this.setBackgroundColor(bgColor)
        }
        if(Array.isArray(radius)) {
            this.setRadius(radius)
        }
        this.saveInLocalStorage()
        return this
     }

     
     figureFromLocalStorage(obj: CircleDotsFigureInterface):this {
      console.log('Obj', obj)
      this.setUuid(obj.uuid)
      this.setX1Y1(obj.x1, obj.y1)
      this.setRadius([obj.r])
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

    setRadius([r]: number[]):void {
        if(!r) throw new Error('Отсутствует радиус')
        this.r = r;
    }

}