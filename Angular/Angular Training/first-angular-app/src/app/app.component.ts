import {Component} from '@angular/core'

@Component({
    selector: 'app-root',
    template: `
                <div>
                    <h1>{{myHeader}}</h1>
                    <p style="color: white; border:
                2px solid black">{{text}}</p> 
                    <img [src]=imageUrl [height]=height [width]=width> 
                    <p>2nd element in array {{[10, 20, 30][1]}}</p>
                    <ul>
                        <li>{{"employee Id: " + employee.employeeID}}</li>
                        <li>{{"employee Name: " + employee.employeeName}}</li>
                        <li>{{"employee Job Role: " + employee.jobRole}}</li>
                    </ul>
                    <h3>{{displayEmployeeDetails()}}</h3>
                    <p [innerHTML]=text></p>
                    <button [disabled]=status>{{buttonValue}}</button>
                </div>
                <app-tests-events></app-tests-events>
                <app-test-for-loop></app-test-for-loop>
                `,
    styles: ['h1{color: green;}', 'h3{color:red}', 
            'p{background-color: black; color: white; font-family:"consolas"}']
})
export class AppComponent{
    constructor(){
        console.log("AppComponent i.e Root component is loaded");
    }

    //Model
    text: string = `This is the first component to get rendered`;
    imageUrl: string = `../assets/images/thinking.jpg`;
    width:number= 50;
    height:number = 50;
    buttonValue: string = "show";
    status: boolean = false;
    private header:string = `Example for Interpolation`;
    get myHeader():string{
        return this.header;
    }

    employee = {
        employeeID: 100,
        employeeName:'John Mathew',
        jobRole: 'Front-End Developer'
    }

    public displayEmployeeDetails(): string{
        return "<< " + this.employee.employeeID + " " + 
        this.employee.employeeName + " " + this.employee.jobRole + " >>";
    }

}