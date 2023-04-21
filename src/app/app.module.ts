import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layout/content-layout/ContentLayoutComponent";
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavComponent,
    FooterComponent,
    AuthLayoutComponent
  ],
  
  imports: [
    BrowserModule,
    // 3rd party
    AuthModule,

    // core & shared
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
