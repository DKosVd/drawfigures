import { AbstractFigureInterface } from 'src/interfaces/AbstractFigure';
import { Line } from './Figure/Line';
import { Reactangle } from './Figure/Reactangle';
import { Triangle } from './Figure/Triangle';
import { typeOfFigure } from '../enums/typeOfFugure';
import { Circle } from './Figure/Сircle';
import { Ellipse } from './Figure/Ellipse';
import { figureName } from 'src/enums/figure';

export class AbstractFigure implements AbstractFigureInterface {
    build(str: string, ctx: CanvasRenderingContext2D | null | undefined): Line | Reactangle | Triangle | Circle | Ellipse | undefined {
        let queryString: string[] = str.trim().split(' ') 
        if(queryString[figureName.figure] === typeOfFigure.line) {
            console.log('Line')
            return new Line(queryString.join(' '), ctx)
        }
        if(queryString[figureName.figure] === typeOfFigure.rectangle) {
            console.log('Rect')
            return new Reactangle(queryString.join(' '), ctx)
        }
        if(queryString[figureName.figure] ===  typeOfFigure.triangle) {
            console.log('triangle')
            return new Triangle(queryString.join(' '), ctx)
        }
        if(queryString[figureName.figure] === typeOfFigure.circule) {
            console.log('circle')
            return new Circle(queryString.join(' '), ctx)
        }
        if(queryString[figureName.figure] === typeOfFigure.ellipse) {
            console.log('Ellipse')
            return new Ellipse(queryString.join(' '), ctx)
        }
        throw new Error("Doesn't exist this geometric figure")
    }
}