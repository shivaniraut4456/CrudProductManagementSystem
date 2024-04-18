import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'product/home', component: HomeComponent},
  {path: 'product', redirectTo:'product/home', pathMatch: 'full'},
  {path: '', redirectTo:'product/home', pathMatch: 'full'},
  {path: 'product/create', component: CreateComponent},
  {path: 'product/edit/:id', component: EditComponent}
 ];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
