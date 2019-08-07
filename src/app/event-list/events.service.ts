import { Key } from 'protractor';

export class EventsService {
    getEvents() {
        localStorage.clear();
        if(localStorage.length == 0){
            localStorage.setItem('title','Event 1');
            localStorage.setItem('description','This is event 1');
            let event1_title = localStorage.getItem('title');
            let event1_description = localStorage.getItem('description');
            return [4,5,6];
        }
    }
}