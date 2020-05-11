export class ActividadesComponent implements OnInit{
    public actividades = [];
    selectActividad:Actividad;

    constructor(private firestoreService: FirestoreService) { }

    ngOnInit(): void {
        this.firestoreService.getActividades().subscribe((actividadesSnapshot) => {
            this.actividades = [];
            actividadesSnapshot.forEach(element => {
                const timestamp = (element.playload.doc.data().fecha.seconds)*1000;
                const fecha = new Date(timestamp);
                const obj: Actividad = {
                    id: element.playload.doc.id,
                    nombre: element.playload.doc.data().nombre,
                    fecha: fecha,
                    prediccion: element.playload.doc.data().prediccion
                }
                this.actividades.push(obj);
            });
        });
    }
    onSelect(actividad: Actividad): void {
        this.selectActividad = actividad;
    }
}