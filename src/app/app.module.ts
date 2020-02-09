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
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
