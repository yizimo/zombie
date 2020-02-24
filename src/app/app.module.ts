import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FirstComponent } from './components/first/first.component';
import { SingleComponent } from './components/first/single/single.component';
import { MoreComponent } from './components/first/more/more.component';
import { OneComponent } from './components/first/single/one/one.component';
import { TwoComponent } from './components/first/single/two/two.component';
import { ThreeComponent } from './components/first/single/three/three.component';
import { FourComponent } from './components/first/single/four/four.component';
import { FiveComponent } from './components/first/single/five/five.component';
import { ResultComponent } from './components/result/result.component';
import { TablComponent } from './components/result/tabl/tabl.component';
import { DataComponent } from './components/data/data.component';
import { ShowEchartsComponent } from './components/show-echarts/show-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsLineComponent } from './components/echarts-line/echarts-line.component';
import { EcharttsComponent } from './components/echartts/echartts.component';
import { EchartsSunburstComponent } from './components/echarts-sunburst/echarts-sunburst.component';
import { EchartsPipComponent } from './components/echarts-pip/echarts-pip.component';
import { EchartRelationComponent } from './components/echart-relation/echart-relation.component';
import { InfoComponent } from './components/info/info.component';
import { BIComponent } from './components/info/bi/bi.component';
import { IAComponent } from './components/info/ia/ia.component';
import { FCComponent } from './components/info/fc/fc.component';
import { BSComponent } from './components/info/bs/bs.component';
import { BCComponent } from './components/info/bc/bc.component';
import {DataService} from './services/data.service';
import {DataImplServiceService} from './services/data-impl-service.service';
import {EcharMapService} from './services/echar-map.service';
import {EcharMapImplService} from './services/echar-map-impl.service';
import {InfoService} from './services/info.service';
import {InfoImplService} from './services/info-impl.service';
import { ChainTableComponent } from './components/show-echarts/chain-table/chain-table.component';
import { ChainMapComponent } from './components/show-echarts/chain-map/chain-map.component';
import { ChainCardComponent } from './components/show-echarts/chain-card/chain-card.component';
import { ChainBarComponent } from './components/show-echarts/chain-bar/chain-bar.component';
import {LocalStorage} from './utils/local-storage';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SingleComponent,
    MoreComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    ResultComponent,
    TablComponent,
    DataComponent,
    ShowEchartsComponent,
    EchartsLineComponent,
    EcharttsComponent,
    EchartsSunburstComponent,
    EchartsPipComponent,
    EchartRelationComponent,
    InfoComponent,
    BIComponent,
    IAComponent,
    FCComponent,
    BSComponent,
    BCComponent,
    ChainTableComponent,
    ChainMapComponent,
    ChainCardComponent,
    ChainBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [
    LocalStorage,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: DataService, useClass: DataImplServiceService},
    { provide: EcharMapService, useClass: EcharMapImplService},
    { provide: InfoService, useClass: InfoImplService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
