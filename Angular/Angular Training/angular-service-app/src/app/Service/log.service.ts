
export class LogService{
    private _currentDate: Date;

    constructor(){
        console.log("log Service");
    }

    info(message: string){
        this._currentDate = new Date();
        console.log(this._currentDate.toISOString() + " | INFO |" + message);
    }
}