import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Convert as boothCvt, Booth } from '../../model/booth.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbooth',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule,FormsModule],
  templateUrl: './addbooth.component.html',
  styleUrl: './addbooth.component.scss'
})

export class AddboothComponent {
  booths: Array<Booth>;
  response: any;
  constructor(private data: DataService, private http: HttpClient, private dialogRef: MatDialogRef<AddboothComponent>) {
    this.booths = data.booths;
    console.log(this.booths);
  }

  addNew(name_booth: string, width: string, length: string, product: string, id_zone: string, price: string, img_booth: string) {
    let jsonObj = {
      name_booth: name_booth,
      width: width,
      length: length,
      product: product,
      id_zone: id_zone,
      price: price,
      img_booth: img_booth
    };
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint + "/admin/Insertbooth", jsonString, { observe: 'response' }).subscribe((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
