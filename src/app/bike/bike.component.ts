import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  public title = 'Mes super balades';

  public bikes: any[] = [
    {
      bikeId: 1,
      bikeName: 'VTT',
      bikeImage: 'assets/vttsentier.png',
      description: 'super journée ensoleillée à faire du vtt'
    },
    {
      bikeId: 2,
      bikeName: 'Course',
      bikeImage: 'assets/coursevia.png',
      description: 'super journée ensoleillée à faire du vélo de course'

    },
    {
      bikeId: 3,
      bikeName: 'VTC',
      bikeImage: 'assets/routevtc.png',
      description: 'super journée ensoleillée à faire du VTC, du vélo sur tout les chemin'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
