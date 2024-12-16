import { Component, Inject } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { Event } from '../../model/event.model';
import { FormsModule } from '@angular/forms';
import { Convert as boothCvt, Booth } from '../../model/booth.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editbooth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editbooth.component.html',
  styleUrl: './editbooth.component.scss'
})
export class EditboothComponent {
  booths: Array<Booth>;
  selected:Booth;
 id_event: any;
  constructor(
    private data:DataService,
    private dialogRef: MatDialogRef<EditboothComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { event: Event },
    private http: HttpClient,
    private dataService: DataService
) {
    this.booths=data.booths;
    this.selected=data.selected;
}

  close() {
    this.dialogRef.close();
  }
  

  save(name_booth: string, width: string, length: string, product: string, id_zone: string, price: string) {
    let jsonObj={
      name_booth: name_booth,
      width: width,
      length: length,
      product: product,
      id_zone: id_zone,
      price: price
    }
    let jsonString= JSON.stringify(jsonObj);
    this.http.put(`${this.dataService.apiEndpoint}/admin/booth_Update/${this.selected.id_booth}`, jsonString)
      .subscribe(
        (response) => {
          console.log('Event updated successfully:', response);
          this.dialogRef.close('updated');
        },
        (error) => {
          console.error('Error updating event:', error);
          alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูล');
        }
      );
  }
}
