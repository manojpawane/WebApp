import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RegistrationService {

    constructor() { }
    register: string[] = ['Samba', 'abc@gmail.com','hbhb'];
    getregisterdetails() {
        return this.register[0];
    }
}
