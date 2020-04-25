import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../../services/general-service.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Location } from '@angular/common';
import { CanComponentDeactivate } from '../../../../core/guards/confirm/confirm.guard';
//import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, CanComponentDeactivate {
  public obj = { id: "zmrzqximWuUqWBZNni4g", name: "Actividad1", date: "2020-04-23", prediction: "N/A", img: "https://images.vexels.com/media/users/3/139344/isolated/preview/04f2d79f761a2663177cb6ab3700a484-icono-cuadrado-cuadrado-redondeado-by-vexels.png" };
  name = this.obj.name;
  date = this.obj.date;
  constructor(private generalService: GeneralServiceService, private _location: Location, private _router: Router) { }

  ngOnInit(): void {
    this.getPrediction();
  }

  public updateData(){
    this.generalService.updateDB(this.obj.name, this.obj.date, this.obj.id);
    this.name = this.obj.name;
    this.date = this.obj.date;
  }

  public getPrediction(){
    this.obj.prediction = "Charging...";
    this.obj.img = "https://d31i9b8skgubvn.cloudfront.net/assets/img/loading.gif";
    this.generalService.getPrediction(this.obj.date).subscribe((res) => {
      this.obj.prediction = res[0].weather_state_name;
      this.obj.img = "https://www.metaweather.com/static/img/weather/"+res[0].weather_state_abbr+".svg";
    })
  }

  public goBack(){
    this._router.navigate(['/crud']);
  }

  public canDeactivate(){
    if(this.obj.name !== this.name || this.obj.date !== this.date){
      return window.confirm('se perderan tus cambios, seguir?');
    }
    return true;
  }

}
