import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../../services/general-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public obj = { id: "123456789", name: "Actividad1", date: "2020-04-23", prediction: "N/A", img: "https://images.vexels.com/media/users/3/139344/isolated/preview/04f2d79f761a2663177cb6ab3700a484-icono-cuadrado-cuadrado-redondeado-by-vexels.png" };
  name = this.obj.name;
  date = this.obj.date;
  constructor(private generalService: GeneralServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.getPrediction();
  }

  public deleteData(){
    return Swal.fire({
      title: 'Eliminar?',
      text: "Se eliminará este registro de la base de datos",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.value){
        this.generalService.deleteDB(this.obj.id);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se han guardado los cambios',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
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
    this._router.navigate(['/read']);
  }
}
