import { MethodForFigure } from './MethodForFigure';
import { EllipseDotsInterface } from 'src/interfaces/EllipseDots';
import { Coords } from 'src/enums/Coords';
import { EllipseDotsFigureInterface } from 'src/interfaces/Figure/EllipseDotsFigure';



export class EllipseDots extends MethodForFigure implements EllipseDotsInterface{
    public x1: number;
    public y1: number;
    public r1: number;
    public r2: number;
    public color: string;
    public backgroundColor: string;
    constructor(str: string) {
      super(str)
      this.x1 = 0;
      this.y1 = 0;
      this.r1 = 0;
      this.r2 = 0;
      this.color = 'black';
      this.backgroundColor = 'black';
    }
    parseString(): this {
        let coords: number[] | boolean = this.params(this.hasOption( this.queryString, '-p'))
        let first_radius: number[] | boolean = this.params(this.hasOption( this.queryString, '-r1'))
        let second_radius: number[] | boolean = this.params(this.hasOption( this.queryString, '-r2'))
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
        if(Array.isArray(first_radius)) {
            this.setRadius1(first_radius[1])
        }
        if(Array.isArray(second_radius)) {
            this.setRadius2(second_radius[1])
        }
        this.saveInLocalStorage()
        return this
     }


     figureFromLocalStorage(obj: EllipseDotsFigureInterface):this {
      console.log('Obj', obj)
      this.setUuid(obj.uuid)
      this.setX1Y1(obj.x1, obj.y1)
      this.setRadius1(obj.r1)
      this.setRadius2(obj.r2)
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

    setRadius1(r1: number) {
        if(!r1) throw new Error('Отсутствует радиус(1)')
        this.r1 = r1;
    }

    setRadius2(r2: number) {
       if(!r2) throw new Error('Отсутствует радиус(2)')
       this.r2 = r2;
    }
}