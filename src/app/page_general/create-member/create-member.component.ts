import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../component/general/header/header.component';
import { FooterComponent } from '../../component/general/footer/footer.component';
import { Member } from '../../model/member.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,ReactiveFormsModule],
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent {
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.memberForm = this.fb.group({
      t_name: ['', Validators.required],
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // onSubmit() {
  //   if (this.memberForm.valid) {
  //     const newMember: Member = this.memberForm.value;

  //     this.http.post('/general/addpi/member', newMember).subscribe(
  //       response => {
  //         console.log('Member registered successfully', response);
  //         this.router.navigate(['/page_general/general']);  // นำผู้ใช้ไปยังหน้า login หลังสมัครเสร็จ
  //       },
  //       error => {
  //         console.error('Error registering member', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }
}
