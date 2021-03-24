import { TwoDots } from '../TwoDots';

export class Reactangle extends TwoDots {
    constructor(str: string, private ctx: CanvasRenderingContext2D | null | undefined) {
        super(str);
        this.ctx = ctx;
    }

    draw() {
        this.ctx!.fillStyle = this.backgroundColor;
        this.ctx!.strokeStyle = this.color;
        this.ctx?.fillRect(this.x1, this.y1, this.x2 + this.x1, this.y2 + this.y1)
    }
}