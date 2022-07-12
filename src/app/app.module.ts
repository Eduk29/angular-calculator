import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './ui-components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, CoreModule, HeaderModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
