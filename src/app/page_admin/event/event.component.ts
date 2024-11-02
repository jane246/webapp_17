import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as eventCvt, Event } from '../../model/event.model';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { EditeventComponent } from '../editevent/editevent.component';
import { AddeventComponent } from '../addevent/addevent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule,HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  events: Array<Event> | undefined;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/event')
      .subscribe(data => {
        this.events = eventCvt.toEvent(JSON.stringify(data));
        console.log(this.events);
      });
  }

  edit(){
    // console.log(event);
    // console.log("Element clicked.");   
    // this.selected = event; 
    this.dataService.selected = this.selected;
    this.dataService.events = this.events;

    this.dialog.open(EditeventComponent, {
      // data: { event: this.selected },
      minWidth: '300px',
      minHeight: '600px'
    });
}


// delete(id_event: number){
//   if(confirm("ยืนยันการลบข้อมูล")){

//   }
// }

  addNew(){
    this.dataService.events=this.events;
    this.dialog.open(AddeventComponent,{
      minWidth:'300px',
      minHeight: '600px'
    });
  }
}
