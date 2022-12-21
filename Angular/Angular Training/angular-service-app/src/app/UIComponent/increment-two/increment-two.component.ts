import { Component } from '@angular/core';
import { IncrementService } from 'src/app/Service/increment.service';
import { LogService } from 'src/app/Service/log.service';

@Component({
  selector: 'app-increment-two',
  templateUrl: './increment-two.component.html',
  styleUrls: ['./increment-two.component.css']
})
export class IncrementTwoComponent {
  names: string[] = ["mridul", "sham","ramesh", "suresh", "jACK", "JILL"];

  counter: number = 100;
  private _incrementService:IncrementService;
  private _logService: LogService;
  constructor (incrementService: IncrementService, logService: LogService)
  {
    console.log("increment two loaded ...");
    this._incrementService  = incrementService;
    this._logService = logService;
  }

  incrementValue(num: number){
    this.counter = this._incrementService.incrementCounter(num);
    this._logService.info(this.counter.toString());
  }
}
