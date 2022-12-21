import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'square'
})
export class SquarePipe implements PipeTransform{
    transform(value: number):number {
        console.log("inside transform");
        return value*value;
    }
}