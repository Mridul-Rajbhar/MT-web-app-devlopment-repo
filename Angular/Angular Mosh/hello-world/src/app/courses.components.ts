import { CoursesService } from './courses.service';
import { Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `{{course.title | uppercase}}<br>
                {{course.students | number}}<br>
                {{course.rating | number:'1.2-2'}}<br>
                {{ course.price | currency:'INR':true: '3.2-2'}}<br>

                {{text | summary: 10}}
            `    
})


export class CoursesComponents{
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1) 
    }
    text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fuga officia. Provident quia similique eos facere, voluptatem esse iusto obcaecati. Exercitationem officia dolorem quos expedita?
    `
        
}