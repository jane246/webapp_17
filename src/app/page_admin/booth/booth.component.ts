import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as boothCvt, Booth } from '../../model/booth.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { EditboothComponent } from '../editbooth/editbooth.component';
import { AddboothComponent } from '../addbooth/addbooth.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booth',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './booth.component.html',
  styleUrl: './booth.component.scss'
})
export class BoothComponent {
  booths: Array<Booth>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.booths = dataService.booths
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/booth')
      .subscribe(data => {
        this.booths = boothCvt.toBooth(JSON.stringify(data));
        console.log(this.booths);
      });
  }

  edit(booth: Booth){
    // console.log(event);
    // console.log("Element clicked.");   
    this.selected = booth; 
    this.dataService.selected = this.selected;
    this.dataService.booths = this.booths;
    this.dialog.open(EditboothComponent, {
      data: { booth: this.selected },
      minWidth: '300px',
      // minHeight: '600px'
    });
  }

  delete(id_booth:string){
    this.http.delete(this.dataService.apiEndpoint+"/admin/booth_Delete/"+id_booth)
    .subscribe((res)=>{
      console.log(res);
    })
  }

  addNew(){
    this.dataService.booths=this.booths;
    this.dialog.open(AddboothComponent,{
      minWidth:'300px',
      // minHeight: '600px'
    });
  }
}
