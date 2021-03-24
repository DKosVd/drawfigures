import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AbstractFigure } from 'src/classes/AbstractFigure';
import { Line } from 'src/classes/Figure/Line';
import { FormControl } from '@angular/forms'
import { Reactangle } from 'src/classes/Figure/Reactangle';
import { Triangle } from 'src/classes/Figure/Triangle';
import { Circle } from 'src/classes/Figure/Сircle';
import { Ellipse } from 'src/classes/Figure/Ellipse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement> | undefined ;
  private ctx: CanvasRenderingContext2D | null | undefined;
  public query = new FormControl('')
  public query_view: string[] | undefined = [];
  public wrong_query: string[] | undefined = [];
  public show: boolean = false;
  public wrong: boolean = false;
  private shapes: Line | Reactangle | Triangle | Circle | Ellipse | undefined;
  constructor() {}

  ngOnInit():void {
    this.ctx = this.canvas?.nativeElement.getContext('2d')
    this.loopForStorage(this.collectStore())
  }

  collectStore(): Array<object>  {
    let keys: Array<string> = Object.keys(localStorage)
    let res: Array<object> = []
    for(let i = 0; i < keys.length; i++) {
      let param = localStorage.getItem(keys[i]) 
      if(param) {
        res.push(JSON.parse(param))
      }
    }
    return res;
  }

  draw(e: Event):void {
    e.preventDefault();
    if(!this.query.value) {
      return
    }
    this.loopForQuery(this.query.value)
    this.query.reset();
  }

  loopForQuery(storage: string): void {
    if(!storage) return; 
    storage.trim().split('|').forEach( (elem: string) => {
      this.shapes = new AbstractFigure().build(elem, this.ctx)
    try {
      if(this.shapes) {
        this.shapes.parseString().draw()
        this.show = true;
        this.query_view?.push(elem)
      }
    } catch(err) {
      this.wrong = true;
      this.wrong_query?.push(err.message)
    }
  }
  )
  }

  loopForStorage(obj: object[]) : void {
    if(!obj.length) return;
    obj.forEach((elem: any) => {
      this.shapes = new AbstractFigure().build(elem.queryString, this.ctx)
      try {
        if(this.shapes) {
          this.shapes.figureFromLocalStorage(elem).draw()
          this.show = true;
          this.query_view?.push(elem.queryString)
        }
      } catch(err) {
        this.wrong = true;
        this.wrong_query?.push(err.message)
      }   
    })
  }

  clear(): void {
    this.ctx?.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    localStorage.clear()
    this.query_view = []
    this.show = false;
    this.wrong = false;
  }

}






