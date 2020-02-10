import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 myForm = new FormGroup({
   name: new FormControl(null),
   email: new FormControl(null)
 })

  constructor () {
  
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
