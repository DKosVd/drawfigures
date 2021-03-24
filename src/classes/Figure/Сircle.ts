import { CircleDots } from '../CircleDots';


export class Circle extends CircleDots {
    constructor(str: string, private ctx: CanvasRenderingContext2D | null | undefined) {
        super(str);
        this.ctx = ctx;
    }

    draw() {
        this.ctx!.strokeStyle = this.color;
        this.ctx!.fillStyle = this.backgroundColor;
        this.ctx?.beginPath();
        this.ctx?.arc(this.x1, this.y1, this.r, 0, 2*Math.PI, false);
        this.ctx?.fill()
        this.ctx?.stroke();
    }
}
