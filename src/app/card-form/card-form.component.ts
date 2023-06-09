import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  creditForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
    cardNumber : new FormControl('',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
    expiration: new FormControl('',[Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  getControl(field:string){
    return this.creditForm.get(field) as FormControl;
  }

  onSubmit(){
    console.log(this.creditForm);
  }
}
