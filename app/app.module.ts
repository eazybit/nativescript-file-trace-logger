import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { Com1Component } from "./com1.component";
import { Com2Component } from "./com2.component";

@NgModule({
  declarations: [AppComponent, Com1Component, Com2Component],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
