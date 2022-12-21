import { LogService } from './../../Service/log.service';
import { IncrementService } from '../../Service/increment.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-one',
  templateUrl: './increment-one.component.html',
  styleUrls: ['./increment-one.component.css']
})
export class IncrementOneComponent {

  counter: number = 0;
  private _incrementService:IncrementService;
  private _logService: LogService = new LogService();

  constructor (incrementService: IncrementService, logService: LogService)
  {
    console.log("increment one loaded ...");
    this._incrementService  = incrementService;
    this._logService = logService;
  }

  incrementValue(num: number){
    this.counter = this._incrementService.incrementCounter(num);
    this._logService.info(this.counter.toString());
  }
  
}
