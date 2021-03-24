import { Line } from 'src/classes/Figure/Line';
import { Reactangle } from 'src/classes/Figure/Reactangle';
import { Triangle } from 'src/classes/Figure/Triangle';
import { Circle } from 'src/classes/Figure/Сircle';
import { Ellipse } from 'src/classes/Figure/Ellipse';

export interface AbstractFigureInterface {
    build(s: string, ctx: CanvasRenderingContext2D | null | undefined): Line | Reactangle | Circle | Ellipse | Triangle | undefined;
}