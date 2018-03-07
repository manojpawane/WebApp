import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/Service/registration.service'

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
    user: string;
    constructor(private _data: RegistrationService) { }

    ngOnInit() {
        this.user = this._data.getregisterdetails();
  }

}
