import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  public title = ' les sites web réalisé  .... ';
  public codes: any[] = [
    {
      codeId: 1,
      codeName: 'angular',
      codeImage: 'assets/angsymfmysqtran.png',
      description: 'un  autres projet, où, je souhait mettre de l\'écriture pour voir.'
    },
    {
      codeId: 2,
      codeName: 'symfony',
      codeImage: 'assets/angsymfmysqtran.png',
      description: 'un  autres projet, où, je souhait mettre de l\'écriture pour voir.'
    },
  ];


    constructor() { }

  ngOnInit(): void {
  }

}
