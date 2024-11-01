import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { Convert as memberCvt, Member} from '../../model/member.model'
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import {MatDialogRef,MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { EmailValidator, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: Member | undefined
  checkoutForm: any;
  response: any;
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private data:DataService){
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    
  }
  
  findAUser(email: string, password: string){
    let jsonObj={
      email: email,
      password: password
    }

    let jsonString = JSON.stringify(jsonObj);
    console.log(jsonString)
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(this.data.apiEndpoint + '/member/login', this.checkoutForm.value, { headers })
    .subscribe(response => {
    console.log(response);
    this.user = memberCvt.toMember(JSON.stringify(response))
    this.dataSave(this.user);
  });
  }

  dataSave(user: any){
      sessionStorage.setItem('user', memberCvt.memberToJson(user));
      console.log("Session added.")
    }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let email: string = this.checkoutForm.value.email;
    let password: string = this.checkoutForm.value.password;
    this.findAUser(email, password)
    this.checkoutForm.reset();
  }
}
