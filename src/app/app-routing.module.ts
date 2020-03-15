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
import {InfoComponent} from './components/info/info.component';
import {IAComponent} from './components/info/ia/ia.component';
import {FCComponent} from './components/info/fc/fc.component';
import {BSComponent} from './components/info/bs/bs.component';
import {BCComponent} from './components/info/bc/bc.component';
import {EchartRelationComponent} from './components/echart-relation/echart-relation.component';

const routes: Routes = [
  {
    path: 'first', component: FirstComponent,
    children: [
      { path: 'single', component: SingleComponent},
      { path: 'more', component: MoreComponent}
    ]
  },
  {
    path: 'result/:id', component: ResultComponent,
    children: [
      { path: 'tabl', component: TablComponent}
    ]
  },
  {
    path: 'data/:id', component: DataComponent
  },
  {
    path: 'relation', component: EchartRelationComponent
  },
  {
    path: 'echartts', component: EcharttsComponent
  },
  {
    path: 'info/:id', component: InfoComponent,
    children: [
      { path: 'bc', component: BCComponent},
      { path: 'bs', component: BSComponent},
      { path: 'fc', component: FCComponent},
      { path: 'ia', component: IAComponent}
    ]
  },
  {
    path: 'china', component: ShowEchartsComponent
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
