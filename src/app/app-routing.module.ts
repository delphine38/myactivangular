import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { CodingComponent } from './coding/coding.component';
import { CrochetComponent } from './crochet/crochet.component';
import { HeaderComponent } from './header/header.component';
import { ReadingComponent } from './reading/reading.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bike', component: BikeComponent},
  {path: 'coding', component: CodingComponent},
  {path: 'crochet', component: CrochetComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'reading', component: ReadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
