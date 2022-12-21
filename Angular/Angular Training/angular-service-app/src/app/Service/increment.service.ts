
export class IncrementService {

  constructor() { 
    console.log("service loaded");
  }

  incrementCounter(counter: number){
    console.log("service method should call")
    return ++counter;
  }
}
