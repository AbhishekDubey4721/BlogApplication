import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'read', component: ReadComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
