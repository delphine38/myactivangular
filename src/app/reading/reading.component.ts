import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  public title = ' Tout les bouquins que je lis  .... ';
  public readings: any[] = [
    {
      readingId: 1,
      readingName: 'un titre',
      readingImage: 'assets/romans.png',
      description: 'Des heures; de ma motivation, et voici un pull qui nait'
    },
    {
      crochetId: 2,
      crochetName: 'un autre titre',
      crochetImage: 'assets/romans.png',
      description: 'Des heures; de ma motivation, et voici un pull qui nait'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
