import { Component, Inject } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { Event } from '../../model/event.model';
import { FormsModule } from '@angular/forms';
import { Convert as eventCvt, Event } from '../../model/event.model';

@Component({
  selector: 'app-editevent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.scss']
})
export class EditeventComponent {
  events: Array<Event>;
  selected:Event;
  constructor(
    private data:DataService,
    private dialogRef: MatDialogRef<EditeventComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { event: Event },
    private http: HttpClient,
    private dataService: DataService
) {
    this.events=data.events;
    this.selected=data.selected;
}

  close() {
    this.dialogRef.close();
  }
  

  // save() {
  //   this.http.put(`${this.dataService.apiEndpoint}/admin/event_Update/${this.event.id_event}`, this.event)
  //     .subscribe(
  //       (response) => {
  //         console.log('Event updated successfully:', response);
  //         this.dialogRef.close('updated');
  //       },
  //       (error) => {
  //         console.error('Error updating event:', error);
  //         alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูลอีเวนต์');
  //       }
  //     );
  // }
}



// import { Component, Inject, OnInit } from '@angular/core';
// import { DataService } from '../../service/data.service';
// import { CommonModule } from '@angular/common';
// import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-editevent',
//   standalone: true,
//   imports: [CommonModule, MatDialogModule, FormsModule,HttpClientModule],
//   templateUrl: './editevent.component.html',
//   styleUrls: ['./editevent.component.scss']
// })
// export class EditeventComponent implements OnInit {
//   event = { id_event: '', name_event: '', date_start: '', date_end: '' };

//   constructor(
//     public dialogRef: MatDialogRef<EditeventComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: { id_event: number },
//     private dataService: DataService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.loadEventData(this.data.id_event);
//   }
  
//   loadEventData(eventId: number): void {
//     this.http.get(this.dataService.apiEndpoint+"/admin/event/"+eventId).subscribe(
//       (data: any) => {
//         this.event = { ...data }; // แสดงข้อมูลที่โหลดในฟอร์ม
//       },
//       (error) => {
//         console.error("Error loading event data:", error);
//         alert("เกิดข้อผิดพลาดในการโหลดข้อมูลอีเวนต์");
//       }
//     );
//   }

//   save(): void {
//     this.http.put(this.dataService.apiEndpoint+"/admin/event_Update/"+this.data.id_event, this.event).subscribe(
//       () => {
//         this.dialogRef.close('updated');
//       },
//       (error) => {
//         console.error('Error updating:', error);
//       }
//     );
//   }

//   close(): void {
//     this.dialogRef.close();
//   }
// }