import {Pipe, PipeTransform} from '@angular/core';
import { forEachChild } from 'typescript';

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform{
    
    transform(value: {name: string, message: string}[], username: string):  {name: string, message: string}[]
    {
        let result: {name: string, message: string}[] = [];

        value.forEach(obj => {
            if(username == obj.name)
                result.push(obj);
        });
        return result;
    }
}