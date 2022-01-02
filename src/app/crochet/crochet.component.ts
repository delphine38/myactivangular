import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crochet',
  templateUrl: './crochet.component.html',
  styleUrls: ['./crochet.component.css']
})
export class CrochetComponent implements OnInit {

  public title = ' Les projets que j \'ai crocheté  .... ';
  public crochets: any[] = [
    {
      crochetId: 1,
      crochetName: 'pull',
      crochetImage: 'assets/crochetpelotte.png',
      description: 'Des heures; de ma motivation, et voici un pull qui nait'
    },
    {
      crochetId: 2,
      crochetName: 'écharpe',
      crochetImage: 'assets/crochetpelotte.png',
      description: 'Des heures; de ma motivation, et voici un pull qui nait'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
