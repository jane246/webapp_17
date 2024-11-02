import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Zone } from '../../model/zone.model';
import { Convert as boothCvt ,Booth } from '../../model/booth.model';


@Component({
  selector: 'app-booth',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.scss']
})
export class BoothComponent {
  zone: Zone;
  booths = Array<Booth>();
  // selected :Booth;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { zone: Zone },
    private dialogRef: MatDialogRef<BoothComponent>,
    private http:HttpClient, 
    private dataService: DataService)
    {
      this.zone = this.data.zone;
      this.http.get(this.dataService.apiEndpoint + '/general/show_booth/'+this.data.zone.id_zone).subscribe((data: any) => {
        this.booths = boothCvt.toBooth(JSON.stringify(data));
        console.log(this.booths);
      });
    }
    
    ngOnInit(): void {
      console.log("Init Zone")
      console.log(this.data.zone); // ข้อมูล `zone` ที่ส่งมาจาก ZoneComponent
    }

    close(){
      this.dialogRef.close();
    }
}