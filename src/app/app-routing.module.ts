import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './components/first/first.component';
import {MoreComponent} from './components/first/more/more.component';
import {SingleComponent} from './components/first/single/single.component';
import {ResultComponent} from './components/result/result.component';
import {TablComponent} from './components/result/tabl/tabl.component';
import {DataComponent} from './components/data/data.component';
import {ShowEchartsComponent} from './components/show-echarts/show-echarts.component';
import {EcharttsComponent} from './components/echartts/echartts.component';

const routes: Routes = [
  {
    path: 'first', component: FirstComponent,
    children: [
      { path: 'single', component: SingleComponent},
      { path: 'more', component: MoreComponent}
    ]
  },
  {
    path: 'result', component: ResultComponent,
    children: [
      { path: 'tabl', component: TablComponent}
    ]
  },
  {
    path: 'data', component: DataComponent
  },
  {
    path: 'show', component: ShowEchartsComponent
  },
  {
    path: 'echartts', component: EcharttsComponent
  },
  {
    path: '**', redirectTo: 'first/single'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
