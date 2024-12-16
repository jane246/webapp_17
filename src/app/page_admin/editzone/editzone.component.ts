import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { Event } from '../../model/event.model';
import { FormsModule } from '@angular/forms';
import { Convert as zoneCvt, Zone } from '../../model/zone.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editzone',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editzone.component.html',
  styleUrl: './editzone.component.scss'
})

export class EditzoneComponent {
  zones: Array<Zone>;
  selected:Zone;
  id_zone: any;
  
  constructor(
    private data:DataService,
    private dialogRef: MatDialogRef<EditzoneComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { event: Event },
    private http: HttpClient,
    private dataService: DataService
  ) 
  {
    this.zones=data.zone;
    this.selected=data.selected;
    console.log("Edit opened.")
  }

  close() {
    this.dialogRef.close();
  }

  save(name_zone: string, num_booth: string, id_event: string) {
    let jsonObj={
      name_zone:name_zone,
      num_booth:num_booth,
      id_event:id_event,
    }
    let jsonString= JSON.stringify(jsonObj);
    this.http.put(`${this.dataService.apiEndpoint}/admin/zone_Update/${this.selected.id_zone}`, jsonString)
      .subscribe(
        (response) => {
          console.log('Event updated successfully:', response);
          this.dialogRef.close('updated');
        },
        (error) => {
          console.error('Error updating event:', error);
          alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูลอีเวนต์');
        }
      );
  }
}
