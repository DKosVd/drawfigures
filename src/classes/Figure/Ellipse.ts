import { EllipseDots } from '../EllipseDots';


export class Ellipse extends EllipseDots {
    constructor(str: string, private ctx: CanvasRenderingContext2D | null | undefined) {
        super(str);
        this.ctx = ctx;
    }

    draw() {
        this.ctx!.strokeStyle = this.color;
        this.ctx!.fillStyle = this.backgroundColor;
        this.ctx?.beginPath();
        this.ctx?.ellipse(this.x1, this.y1, this.r1, this.r2, 0, 0, 2 * Math.PI);
        this.ctx?.fill()
        this.ctx?.stroke();
    }
}
