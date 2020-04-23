import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../../services/general-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public obj = { id: "123456789", name: "Actividad1", date: "2018-07-02", prediction: "N/A" };

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {

  }

  public getPrediction(){
    this.obj.prediction = "Charging...";
    this.generalService.getPrediction(this.obj.date).subscribe((res) => {
      console.log(res[0]);
      this.obj.prediction = res[0].weather_state_name;
    })
  }

}
