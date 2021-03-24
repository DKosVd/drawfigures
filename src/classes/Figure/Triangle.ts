import { ThreeDots } from '../ThreeDots';

export class Triangle extends ThreeDots {
    constructor(str: string, private ctx: CanvasRenderingContext2D | null | undefined) {
        super(str);
        this.ctx = ctx;
    }

    draw() {
        this.ctx!.strokeStyle = this.color 
        this.ctx!.fillStyle = this.backgroundColor
        this.ctx?.beginPath();
        this.ctx?.moveTo(this.x1, this.y1)
        this.ctx?.lineTo(this.x2, this.y2)
        this.ctx?.lineTo(this.x3, this.y3)
        this.ctx?.fill()
    }
}
