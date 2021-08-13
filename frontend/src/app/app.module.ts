import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule} from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NbThemeModule.forRoot({name: "cosmic"}),
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        NbSidebarModule,
        NbButtonModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
