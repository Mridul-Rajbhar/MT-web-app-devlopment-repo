import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform{
    transform(value: string) {
        let result: string = "";
        let spaceEncountered:boolean = false;
        result += value.charAt(0).toUpperCase();
        for(let i =1 ; i< value.length; i++){
            if(value.charAt(i) != ' '){
                if(!spaceEncountered)
                    result += value.charAt(i).toLowerCase();
                else
                {
                    result += value.charAt(i).toUpperCase();
                    spaceEncountered = false;
                }
            }
            else{
                result += value.charAt(i);
                spaceEncountered = true;
            }
        }  
        return result;
    }
}