import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectsComponent } from './pages/selects/selects.component';

const routes: Routes = [
  {
    path: '',
    component: SelectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
