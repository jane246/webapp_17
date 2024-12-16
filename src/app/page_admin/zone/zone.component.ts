import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as zoneCvt, Zone } from '../../model/zone.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { EditzoneComponent } from '../editzone/editzone.component';
import { AddzoneComponent } from '../addzone/addzone.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.scss'
})
export class ZoneComponent {
  zones: Array<Zone>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.zones = dataService.zone
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/zone')
      .subscribe(data => {
        this.zones = zoneCvt.toZone(JSON.stringify(data));
        console.log(this.zones);
      });
  }

  edit(zone: Zone){
    // console.log(event);
    // console.log("Element clicked.");
    console.log("Go to edit.")   
    this.selected = zone; 
    this.dataService.selected = this.selected;
    this.dataService.zone = this.zones;
    this.dialog.open(EditzoneComponent, {
      data: { zone: this.selected },
      minWidth: '300px',
      // minHeight: '600px'
    });
  }

  delete(id_zone:string){
    this.http.delete(this.dataService.apiEndpoint+"/admin/zone_Delete/"+id_zone)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  addNew(){
    this.dataService.zone=this.zones;
    this.dialog.open(AddzoneComponent,{
      minWidth:'300px'
    });
  }
}
