import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1ChildPage } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1ChildPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1ChildPageRoutingModule {}
