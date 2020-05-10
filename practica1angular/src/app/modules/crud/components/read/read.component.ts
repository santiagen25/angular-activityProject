import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public objRecogido = { id: "zmrzqximWuUqWBZNni4g", name: "Actividad1", date: "2020-04-23", prediction: "N/A", img: "https://images.vexels.com/media/users/3/139344/isolated/preview/04f2d79f761a2663177cb6ab3700a484-icono-cuadrado-cuadrado-redondeado-by-vexels.png" };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  public goUpdate(){
    this.router.navigate(['/update']);
  }

  public goDelete(){
    this.router.navigate(['/delete'])
  }

}
