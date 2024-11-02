import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../component/general/header/header.component';
import { FooterComponent } from '../../component/general/footer/footer.component';
import { Convert as memberCvt, Member } from '../../model/member.model';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, HttpClientModule,AdminComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: Member | undefined;
  checkoutForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private data: DataService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  findAUser(email: string, password: string) {
    const headers = { 'Content-Type': 'application/json' };

    this.http.post<{ success: boolean, message: string, user?: Member }>(this.data.apiEndpoint + '/admin/login', this.checkoutForm.value, { headers })
      .subscribe(response => {
        console.log('Success Value:', response.message); 
        if (response.message) {
          alert(response.message);
        } else {
          this.user = response.user;
          this.dataSave(this.user);
          this.router.navigate(['/page_admin/admin']); // เปลี่ยนไปยังหน้าถัดไป
        }
      }, error => {
        alert("An error occurred during login.");
      });
  }

  dataSave(user: Member | undefined) {
    if (user) {
      // sessionStorage.clear();
      sessionStorage.setItem('user', memberCvt.memberToJson(user));
      console.log("Session added.");
    }
  }

  onSubmit(): void {
    const email: string = this.checkoutForm.value.email;
    const password: string = this.checkoutForm.value.password;
    this.findAUser(email, password);
    this.checkoutForm.reset();
  }
}
